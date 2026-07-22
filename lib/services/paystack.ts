import Paystack from "paystack-api";

const secretKey = process.env.PAYSTACK_SECRET_KEY;
const publicKey = process.env.PAYSTACK_PUBLIC_KEY;

export const isPaystackConfigured = () => Boolean(secretKey && secretKey.startsWith("sk_"));

export function getPaystackPublicKey() {
  return publicKey || "";
}

const paystack = secretKey ? Paystack(secretKey) : null;

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
  if (!paystack) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }

  const response = await paystack.transaction.initialize({
    email,
    amount,
    reference,
    callback_url: callbackUrl,
    metadata,
    channels: ["card", "mobile_money"],
  });

  return response as {
    status: boolean;
    message: string;
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  };
}

export async function verifyPayment(reference: string) {
  if (!paystack) {
    throw new Error("Paystack is not configured. Add PAYSTACK_SECRET_KEY to .env");
  }

  const response = await paystack.transaction.verify({ reference });
  return response as {
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
      authorization?: {
        mobile_money_number?: string;
      };
      metadata?: Record<string, string>;
    };
  };
}
