import type { Metadata } from "next";
import "./globals.css";
import { AuthSessionProvider } from "@/components/providers/session-provider";
import { ToastProvider } from "@/components/providers/toast-provider";

export const metadata: Metadata = {
  title: "PK Luxury Apartments | Modern Living in Haatso",
  description:
    "PK Luxury Apartments offers modern, secure apartment living in Haatso, Ghana. Browse available rooms, book online, track rent payments, and manage maintenance requests from any device.",
  keywords: [
    "apartments",
    "Haatso",
    "Ghana",
    "luxury apartments",
    "rent",
    "room booking",
    "PK Luxury Apartments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <AuthSessionProvider>
          {children}
          <ToastProvider />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
