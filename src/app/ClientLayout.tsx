"use client";
import type React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/providers/cart";
import { Toaster } from "@/components/ui/toaster";
import { CookiesProvider } from "react-cookie";
import { UserProvider } from "@/providers/user-provider";
import QueryProvider from "@/providers/react-query-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  return (
    <QueryProvider>
      <CookiesProvider>
        <UserProvider>
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
        </UserProvider>
      </CookiesProvider>
    </QueryProvider>
  );
}
