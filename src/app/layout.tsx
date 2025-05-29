import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
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
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="min-h-screen bg-background antialiased font-vazir">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
