// Paystack API wrapper.
//
// The paystack-api package only ships a CommonJS entry point and uses a
// `this instanceof` constructor pattern that webpack can mangle. The
// shim below lazy-loads the package from a function call so webpack
// only treats it as a dynamic import; the public surface used by the
// rest of the app is just `initializePayment` and `verifyPayment`.

const secretKey = process.env.PAYSTACK_SECRET_KEY;
const publicKey = process.env.PAYSTACK_PUBLIC_KEY;

export const isPaystackConfigured = () => Boolean(secretKey && secretKey.startsWith("sk_"));

export function getPaystackPublicKey() {
  return publicKey || "";
}

type InitializeArgs = {
  email: string;
  amount: number;
  reference: string;
  callback_url?: string;
  metadata?: Record<string, string>;
  channels?: string[];
};

type InitializeResult = {
  status: boolean;
  message: string;
  data: { authorization_url: string; access_code: string; reference: string };
};

type VerifyResult = {
  status: boolean;
  message: string;
  data: {
    status: "success" | "failed" | "abandoned" | "pending";
    reference: string;
    amount: number;
    paid_at: string | null;
    channel: string;
    card_type?: string;
    bank?: string;
    authorization?: { mobile_money_number?: string };
    metadata?: Record<string, string>;
  };
};

interface PaystackShim {
  transaction: {
    initialize: (args: InitializeArgs) => Promise<InitializeResult>;
    verify: (args: { reference: string }) => Promise<VerifyResult>;
  };
}

let _client: PaystackShim | null = null;
let _clientPromise: Promise<PaystackShim | null> | null = null;

async function getClient(): Promise<PaystackShim | null> {
  if (!secretKey) return null;
  if (_client) return _client;
  if (_clientPromise) return _clientPromise;
  _clientPromise = (async () => {
    // Use a dynamic require so the CommonJS module is only evaluated
    // at runtime and the import graph stays type-safe.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const required = await import("paystack-api");
    // The vendored module exports a function-constructor. We construct
    // the client and let its `import` step wire up the resource methods.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Ctor: any = (required as any).default ?? required;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instance: any = new Ctor(secretKey);
    _client = instance as PaystackShim;
    return _client;
  })();
  return _clientPromise;
}

export async function initializePayment({
  email,
  amount,
  reference,
  callbackUrl,
  metadata,
}: {
  email: string;
  amount: number;
  reference: string;
  callbackUrl: string;
  metadata?: Record<string, string>;
}) {
  const client = await getClient();
  if (!client) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }
  return client.transaction.initialize({
    email,
    amount,
    reference,
    callback_url: callbackUrl,
    metadata,
    channels: ["card", "mobile_money"],
  });
}

export async function verifyPayment(reference: string) {
  const client = await getClient();
  if (!client) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }
  return client.transaction.verify({ reference });
}
