import localFont from "next/font/local";

export const nothing = localFont({
  src: [
    {
      path: "./fonts/nothing-font-5x7.otf",
      weight: "400",
      style: "normal",
    },
    // Add more font variants here if needed
  ],
  variable: "--font-nothing",
  display: "swap",
  preload: true,
  // valid values for adjustFontFallback are false or a fallback family string
  adjustFontFallback: false,
});