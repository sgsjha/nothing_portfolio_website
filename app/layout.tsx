import type { Metadata } from "next";
import { nothing } from "./font";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${nothing.variable}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
