const apiKey = process.env.MNOTIFY_API_KEY;
const senderId = process.env.MNOTIFY_SENDER_ID || "PKLUXURY";
const endpoint =
  process.env.MNOTIFY_SMS_ENDPOINT || "https://api.mnotify.com/api/sms/quick";

type MNotifyResponse = {
  status?: string | number;
  code?: string | number;
  message?: string;
  [key: string]: unknown;
};

export const isSmsConfigured = () => Boolean(apiKey);

function normalizeGhanaPhoneNumber(phone: string) {
  const trimmed = phone.trim().replace(/[\s-]/g, "");
  if (trimmed.startsWith("+")) return trimmed;
  if (trimmed.startsWith("233")) return `+${trimmed}`;
  return `+233${trimmed.replace(/^0/, "")}`;
}

export async function sendSms({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  const normalizedTo = normalizeGhanaPhoneNumber(to);

  if (!apiKey) {
    console.warn("[SMS] mNotify not configured. Would send:", { to: normalizedTo, message });
    return { status: "sent", messageId: "demo-sms-id" };
  }

  const url = new URL(endpoint);
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      recipient: [normalizedTo],
      sender: senderId,
      message,
      is_schedule: false,
      schedule_date: "",
    }),
  });

  const result = (await response.json().catch(() => ({}))) as MNotifyResponse;

  if (!response.ok) {
    console.error("[SMS] mNotify request failed:", result);
    throw new Error(result.message || `mNotify request failed with ${response.status}`);
  }

  return result;
}

export function paymentReceiptSms({
  amount,
  reference,
}: {
  amount: string;
  reference: string;
}) {
  return `PK Luxury Apartments: Your rent payment of ${amount} has been received. Ref: ${reference}. Thank you.`;
}

export function maintenanceUpdateSms({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return `PK Luxury Apartments: Your maintenance request "${title}" is now ${status.toLowerCase()}.`;
}

export function billPaymentReceiptSms({
  amount,
  reference,
}: {
  amount: string;
  reference: string;
}) {
  return `PK Luxury Apartments: Your water bill payment of ${amount} has been received. Ref: ${reference}. Thank you.`;
}

export function newBillSms({
  amount,
  dueDate,
}: {
  amount: string;
  dueDate: string;
}) {
  return `PK Luxury Apartments: A water bill of ${amount} is due on ${dueDate}. Please pay before the due date.`;
}

export function bookingRequestSms({
  roomNumber,
}: {
  roomNumber: string;
}) {
  return `PK Luxury Apartments: Your booking request for room ${roomNumber} has been received. We will contact you shortly.`;
}

export function announcementSms({ body }: { body: string }) {
  return `PK Luxury Apartments: ${body}`;
}
