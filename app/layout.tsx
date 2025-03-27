"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Noto_Sans_Thai } from 'next/font/google'
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Optional: specify font weights
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className={`${notoSansThai.variable}`}>
      <body className="font-noto">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}