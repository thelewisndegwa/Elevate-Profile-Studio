import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevate Profile Studio | Premium Digital Identity for Professionals",
  description:
    "Portfolio websites, executive profiles, and digital business cards for lawyers, consultants, founders, and executives across Kenya and Africa.",
  keywords: [
    "portfolio website Kenya",
    "executive personal brand",
    "professional website design",
    "digital business card",
    "financial advisor website",
  ],
  openGraph: {
    title: "Elevate Profile Studio",
    description:
      "Premium digital identity for modern professionals across Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
