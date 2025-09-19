import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Think&Lila Tech | Digital Marketing Agency",
    template: "%s | Think&Lila Tech",
  },
  description:
    "We are a world-class digital marketing agency that blends creativity with technology. Offering SEO, social media marketing, and digital product development.",
  keywords: [
    "digital marketing",
    "SEO",
    "social media marketing",
    "branding",
    "Think&Lila Tech",
  ],
  authors: [{ name: "Think&Lila Tech" }],
  creator: "Think&Lila Tech",
  metadataBase: new URL("https://thinklilatech.com"), 
  openGraph: {
    title: "Think&Lila Tech | Digital Marketing Agency",
    description:
      "Grow your business with SEO, social media marketing, and digital product development services.",
    url: "https://thinklilatech.com",
    siteName: "Think&Lila Tech",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Think&Lila Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think&Lila Tech | Digital Marketing Agency",
    description:
      "World-class digital marketing services: SEO, social media marketing, branding, and more.",
    images: ["/images/og-image.jpg"],
    creator: "@yourhandle", 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0A1019",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A1019] text-white`}
      >
        {/* Main site wrapper */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
