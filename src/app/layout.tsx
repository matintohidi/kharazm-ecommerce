import type React from "react";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "Kharazm E-commerce | Online Shop",
  description:
    "Discover the best products at unbeatable prices on Kharazm Shop. Fast delivery, secure checkout, and quality guaranteed.",
  keywords: [
    "Kharazm E-commerce",
    "online shop",
    "e-commerce",
    "buy online",
    "shopping",
    "fast delivery",
    "quality products",
  ],
  authors: [{ name: "Kharazm Team", url: "https://kharazm.com" }],
  creator: "Kharazm Team",
  publisher: "Kharazm",
  robots: "index, follow",
  openGraph: {
    title: "Kharazm E-commerce | Online Marketplace",
    description:
      "E-commerce smart with Kharazm. Browse our wide selection of top-quality items.",
    url: "https://kharazm.com",
    siteName: "Kharazm E-commerce",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
