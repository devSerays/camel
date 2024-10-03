import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Camel Coin",
  description: "Camel Coin ; The Desert’s Digital Gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={`lg:max-w-[1440px] mx-auto`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
