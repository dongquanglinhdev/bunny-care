import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Bunny Care 🐰 – Your Safe Place in Tokyo",
  description: "A cute, comforting app for you, from someone who loves you 💕",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-cute text-gray-700 pb-24 min-h-screen">
        <main className="max-w-md mx-auto px-4 pt-6">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
