import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "./../components/ThemeSwitcher";

import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <body
        className={`${inter.variable} ${montserrat.variable} bg-lightBg dark:bg-darkBg min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
