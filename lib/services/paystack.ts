// Paystack REST client.
//
// Paystack has a documented HTTPS API at https://api.paystack.co so the
// app talks to it directly with fetch instead of a third-party SDK.
// This keeps the dependency surface small and avoids the
// CommonJS/import-graph headaches the paystack-api package creates.

const PAYSTACK_BASE = "https://api.paystack.co";

export const isPaystackConfigured = () =>
  Boolean(process.env.PAYSTACK_SECRET_KEY && process.env.PAYSTACK_SECRET_KEY.startsWith("sk_"));

export function getPaystackPublicKey() {
  return process.env.PAYSTACK_PUBLIC_KEY || "";
}

type InitializeArgs = {
  email: string;
  amount: number; // in pesewas
  reference: string;
  callback_url?: string;
  metadata?: Record<string, string>;
  channels?: string[];
};

export type PaystackInitializeResponse = {
  status: boolean;
  message: string;
  data: { authorization_url: string; access_code: string; reference: string };
};

export type PaystackVerifyResponse = {
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

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  } as const;
}

export async function initializePayment(args: InitializeArgs): Promise<PaystackInitializeResponse> {
  if (!isPaystackConfigured()) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }
  const res = await fetch(`${PAYSTACK_BASE}/transaction/initialize`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Paystack initialize failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<PaystackInitializeResponse>;
}

export async function verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
  if (!isPaystackConfigured()) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }
  const res = await fetch(
    `${PAYSTACK_BASE}/transaction/verify/${encodeURIComponent(reference)}`,
    { method: "GET", headers: authHeaders(), cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error(`Paystack verify failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<PaystackVerifyResponse>;
}
