import localFont from "next/font/local";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Providers from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
  },
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
  const cookie = headers().get("cookie");
  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
        <Toaster position="top-center" />
        <Providers cookie={cookie}>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
