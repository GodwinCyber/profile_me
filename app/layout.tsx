import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godwin | Portfolio",
  description: "Personal portfolio website showcasing projects and skills",
};

/**
 * The root layout for the entire application.
 * It sets up the HTML structure, includes the Navbar, and wraps the page content.
 * It also configures the fonts and metadata for the site.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ "--line-color": "#FFF" } as React.CSSProperties}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative z-0`}
      >
        <div id="root">
          <div className="relative z-0">
            <Navbar />
            <main className="sm:px-16 px-6 w-full max-w-7xl mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
