import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "@/components/layouts/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "北九州ハッカソン",
  description: "北九州ハッカソンで作成したプロダクト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
