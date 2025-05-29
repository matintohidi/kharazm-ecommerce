"use client";
import type React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/components/cart-provider";
import { Toaster } from "@/components/ui/toaster";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CartProvider>
        <div className="relative flex min-h-screen flex-col">
          {!isAuthPage && <Header />}
          <div className={isAuthPage ? "min-h-screen" : "flex-1"}>
            {children}
          </div>
          {!isAuthPage && <Footer />}
        </div>
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
}
