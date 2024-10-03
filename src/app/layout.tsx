import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Camel Coin",
  description: "Camel Coin ; The Desert’s Digital Gold",
};

const geistMono = localFont({
  src: "./fonts/HoboStd.otf",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
