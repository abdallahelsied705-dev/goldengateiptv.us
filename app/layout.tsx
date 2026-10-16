import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Motion from "./components/Motion";
import { SITE_URL } from "./lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV USA | 50,000+ Channels in 4K, Free 24-Hour Trial",
    template: "%s — IPTV USA",
  },
  description:
    "IPTV USA subscription: 50,000+ live channels and 200,000+ movies & series in up to 4K over your internet. Works on Firestick, Smart TV, Android & iPhone. No contract, free 24-hour trial.",
  keywords: [
    "IPTV USA",
    "US IPTV",
    "IPTV subscription USA",
    "best IPTV USA",
    "IPTV USA free trial",
    "Firestick IPTV USA",
    "4K IPTV USA",
    "IPTV box USA",
  ],
  authors: [{ name: "IPTV USA" }],
  creator: "IPTV USA",
  publisher: "IPTV USA",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "IPTV USA",
    title: "IPTV USA | 50,000+ Channels in 4K, Free 24-Hour Trial",
    description:
      "A US IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K. No dish, no contract, free 24-hour trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV USA | 50,000+ Channels in 4K, Free 24-Hour Trial",
    description:
      "A US IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K. No dish, no contract, free 24-hour trial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Motion />
      </body>
    </html>
  );
}
