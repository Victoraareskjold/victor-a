import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ThemeProvider from "../utils/ThemeProvider";

import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeSetterModal from "@/components/ThemeSetterModal";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Victor Aareskjold",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.variable} ${montserrat.variable} bg-lightBg dark:bg-darkBg min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ThemeSetterModal />

          <main className="antialiased">
            <Script
              src="https://www.consentify.app/api/consent?token=d56cb0a3-ec5d-446b-8fa0-36fd6d8237ab"
              strategy="lazyOnload" // eller "beforeInteractive"
            ></Script>

            {children}
            <Analytics />
            <SpeedInsights />
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
