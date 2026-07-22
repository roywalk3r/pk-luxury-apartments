// Paystack API wrapper using the paystack-api package.
// The package expects a function-constructor pattern that conflicts with
// webpack module federation in Next.js. We construct a thin shim that
// matches the minimal surface used by the app (transaction.initialize, .verify).

import Paystack from "paystack-api";

const secretKey = process.env.PAYSTACK_SECRET_KEY;
const publicKey = process.env.PAYSTACK_PUBLIC_KEY;

export const isPaystackConfigured = () => Boolean(secretKey && secretKey.startsWith("sk_"));

export function getPaystackPublicKey() {
  return publicKey || "";
}

type PaystackShim = {
  transaction: {
    initialize: (params: {
      email: string;
      amount: number;
      reference: string;
      callback_url?: string;
      metadata?: Record<string, string>;
      channels?: string[];
    }) => Promise<{
      status: boolean;
      message: string;
      data: { authorization_url: string; access_code: string; reference: string };
    }>;
    verify: (params: { reference: string }) => Promise<{
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
    }>;
  };
};

function buildShim(key: string): PaystackShim {
  // The vendored module exports a function that mutates `this`; calling
  // it without `new` returns a plain object whose prototype is wired up
  // in the `import` step. We invoke it as a constructor and also keep
  // the result for the prototype methods.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance: any = new (Paystack as any)(key);
  return instance as PaystackShim;
}

let _client: PaystackShim | null = null;
function getClient(): PaystackShim | null {
  if (!secretKey) return null;
  if (!_client) _client = buildShim(secretKey);
  return _client;
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
  const client = getClient();
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
  const client = getClient();
  if (!client) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }
  return client.transaction.verify({ reference });
}
