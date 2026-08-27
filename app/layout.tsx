import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  DM_Mono,
} from "next/font/google";

import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll/smooth-scroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nilima Design Associates",
  description: "Civil and structural engineering consultancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${dmMono.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}