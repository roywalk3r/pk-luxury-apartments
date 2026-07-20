import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 465);
const smtpUser = process.env.SMTP_USER || process.env.MAIL_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD || process.env.MAIL_PASSWORD;
const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.MAIL_FROM_ADDRESS || smtpUser;
const fromName =
  process.env.SMTP_FROM_NAME ||
  process.env.MAIL_FROM_NAME?.replace("${APP_NAME}", "PK Luxury Apartments") ||
  "PK Luxury Apartments";

export const isEmailConfigured = () => Boolean(smtpUser && smtpPassword && fromEmail);

const transporter =
  smtpUser && smtpPassword
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      })
    : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function shellEmail({ title, body }: { title: string; body: string }) {
  return `
    <div style="margin:0;padding:24px;background:#f7f3ea;font-family:Arial,sans-serif;color:#1c1917;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6e0d6;border-radius:12px;overflow:hidden;">
        <div style="padding:24px;background:#1f4d3a;color:#ffffff;">
          <p style="margin:0;color:#d4af37;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">PK Luxury Apartments</p>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
        </div>
        <div style="padding:24px;font-size:15px;line-height:1.6;">
          ${body}
        </div>
        <div style="padding:16px 24px;border-top:1px solid #e6e0d6;color:#78716c;font-size:12px;">
          Haatso, Ghana · Secure tenant records, payments, and maintenance updates
        </div>
      </div>
    </div>
  `;
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  if (!transporter || !fromEmail) {
    console.warn("[Email] Google SMTP not configured. Would send:", { to, subject });
    return { id: "demo-email-id", status: "sent" };
  }

  const info = await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    subject,
    html,
    text,
  });

  return { id: info.messageId, status: "sent" };
}

export function paymentReceiptEmail({
  tenantName,
  roomNumber,
  amount,
  method,
  paidAt,
  reference,
}: {
  tenantName: string;
  roomNumber: string;
  amount: string;
  method: string;
  paidAt: string;
  reference: string;
}) {
  const subject = `Rent payment receipt - ${reference}`;
  const html = shellEmail({
    title: "Payment receipt",
    body: `
      <p>Dear ${escapeHtml(tenantName)},</p>
      <p>Your rent payment has been received and recorded.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        ${[
          ["Reference", reference],
          ["Room", roomNumber],
          ["Amount", amount],
          ["Method", method],
          ["Date", paidAt],
        ]
          .map(
            ([label, value]) => `
              <tr>
                <th style="text-align:left;padding:10px;border:1px solid #e6e0d6;background:#faf8f5;">${escapeHtml(label)}</th>
                <td style="padding:10px;border:1px solid #e6e0d6;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <p>Thank you for choosing PK Luxury Apartments.</p>
    `,
  });
  return { subject, html };
}

export function maintenanceUpdateEmail({
  tenantName,
  title,
  roomNumber,
  status,
}: {
  tenantName: string;
  title: string;
  roomNumber: string;
  status: string;
}) {
  const subject = `Maintenance request update - ${title}`;
  const html = shellEmail({
    title: "Maintenance update",
    body: `
      <p>Dear ${escapeHtml(tenantName)},</p>
      <p>Your maintenance request <strong>${escapeHtml(title)}</strong> for room ${escapeHtml(roomNumber)} is now <strong>${escapeHtml(status.toLowerCase())}</strong>.</p>
      <p>Login to your dashboard for more details.</p>
    `,
  });
  return { subject, html };
}

export function billPaymentReceiptEmail({
  tenantName,
  roomNumber,
  amount,
  method,
  paidAt,
  reference,
}: {
  tenantName: string;
  roomNumber: string;
  amount: string;
  method: string;
  paidAt: string;
  reference: string;
}) {
  const subject = `Water bill payment receipt - ${reference}`;
  const html = shellEmail({
    title: "Water bill payment receipt",
    body: `
      <p>Dear ${escapeHtml(tenantName)},</p>
      <p>Your water bill payment has been received and recorded.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        ${[
          ["Reference", reference],
          ["Room", roomNumber],
          ["Amount", amount],
          ["Method", method],
          ["Date", paidAt],
        ]
          .map(
            ([label, value]) => `
              <tr>
                <th style="text-align:left;padding:10px;border:1px solid #e6e0d6;background:#faf8f5;">${escapeHtml(label)}</th>
                <td style="padding:10px;border:1px solid #e6e0d6;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <p>Thank you for choosing PK Luxury Apartments.</p>
    `,
  });
  return { subject, html };
}

export function newBillEmail({
  tenantName,
  roomNumber,
  amount,
  dueDate,
}: {
  tenantName: string;
  roomNumber: string;
  amount: string;
  dueDate: string;
}) {
  const subject = `New water bill posted - Room ${roomNumber}`;
  const html = shellEmail({
    title: "Water bill posted",
    body: `
      <p>Dear ${escapeHtml(tenantName)},</p>
      <p>A new water bill has been posted for room ${escapeHtml(roomNumber)}.</p>
      <ul>
        <li>Amount: ${escapeHtml(amount)}</li>
        <li>Due date: ${escapeHtml(dueDate)}</li>
      </ul>
      <p>Please make payment before the due date.</p>
    `,
  });
  return { subject, html };
}

export function bookingRequestEmail({
  name,
  email,
  phone,
  roomNumber,
}: {
  name: string;
  email: string;
  phone: string;
  roomNumber: string;
}) {
  const subject = `Booking request received - Room ${roomNumber}`;
  const html = shellEmail({
    title: "Booking request received",
    body: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Your booking request for room ${escapeHtml(roomNumber)} has been received.</p>
      <p>Our team will contact you shortly at ${escapeHtml(phone)} or ${escapeHtml(email)}.</p>
    `,
  });
  return { subject, html };
}

export function announcementEmail({ subject, body }: { subject: string; body: string }) {
  const html = shellEmail({
    title: subject,
    body: `<p>Dear tenant,</p><div style="line-height:1.6;">${escapeHtml(body).replace(/\n/g, "<br/>")}</div>`,
  });
  return { subject, html };
}
