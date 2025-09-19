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
      <head>
        {/* Preconnect to Spline host to speed up TLS/DNS */}
        <link
          rel="preconnect"
          href="https://prod.spline.design"
          crossOrigin="anonymous"
        />
        {/* Preload the desktop scene only on larger viewports */}
        <link
          rel="preload"
          href="https://prod.spline.design/5hbfuX6XwdvzbH8h/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
          media="(min-width: 769px)"
        />
        {/* Preload an optional mobile scene (if you provide one) on small viewports */}
        <link
          rel="preload"
          href="https://prod.spline.design/5hbfuX6XwdvzbH8h/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
          media="(max-width: 768px)"
        />
      </head>
      <body className={`font-sans ${nothing.variable}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
