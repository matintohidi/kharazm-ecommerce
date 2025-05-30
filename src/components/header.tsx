"use client";
import { useCart } from "@/components/cart-provider";
import { cn } from "@/lib/utils";
import { X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const mainNav = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHaveBackgroundPage =
    pathname === "/" || pathname === "/about" || pathname === "/contact";
  const isAuthPage = pathname.startsWith("/auth");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTransparent(scrollPosition < 20);
    };

    if (isHaveBackgroundPage) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHaveBackgroundPage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const cartItemsCount = cart.items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full max-w-full overflow-x-hidden">
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-4 lg:px-0 lg:py-5 duration-200 transition-all",
          isTransparent && isHaveBackgroundPage
            ? "bg-transparent text-white"
            : "bg-white/95 backdrop-blur-sm text-slate-800 shadow-md"
        )}
      >
        <div className="mx-auto flex h-[38px] max-w-[1200px] items-center justify-between lg:h-[54px]">
          <div className="flex shrink-0 items-center gap-x-3">
            <button
              className="flex w-6 flex-col items-stretch gap-y-1 md:hidden transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="منوی اصلی"
            >
              <div
                className={cn(
                  "h-0.5 rounded-full bg-current transition-transform duration-200",
                  isMobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              ></div>
              <div
                className={cn(
                  "h-0.5 rounded-full bg-current transition-opacity duration-200",
                  isMobileMenuOpen && "opacity-0"
                )}
              ></div>
              <div
                className={cn(
                  "h-0.5 rounded-full bg-current transition-transform duration-200",
                  isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              ></div>
            </button>
            <Link href="/" className="shrink-0">
              <div
                className={cn(
                  "text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-200",
                  isTransparent && isHaveBackgroundPage
                    ? "text-white"
                    : "text-primary"
                )}
              >
                خوارزم
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 lg:px-4 py-2 lg:py-3 transition-all duration-200 text-sm lg:text-base font-medium",
                  pathname === item.href
                    ? isTransparent && isHaveBackgroundPage
                      ? "text-white bg-white/20 rounded-md"
                      : "text-primary bg-primary/10 rounded-md"
                    : isTransparent && isHaveBackgroundPage
                    ? "text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                    : "text-slate-800 hover:text-primary hover:bg-primary/5 rounded-md"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/cart"
              className={cn(
                "relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-md transition-all duration-200",
                isTransparent && isHaveBackgroundPage
                  ? "border border-white/30 text-white hover:bg-white/10"
                  : "border border-gray-300 text-slate-800 hover:bg-gray-50"
              )}
            >
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </span>
              )}
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 lg:gap-2">
              <Link
                href="/auth/register"
                className={cn(
                  "flex items-center rounded-md px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 transition-all duration-200",
                  isTransparent && isHaveBackgroundPage
                    ? "bg-white text-slate-800 hover:bg-gray-50"
                    : "bg-primary text-white hover:bg-primary/90"
                )}
              >
                ثبت‌نام
              </Link>
              <Link
                href="/auth/login"
                className={cn(
                  "flex items-center rounded-md border px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 transition-all duration-200",
                  isTransparent && isHaveBackgroundPage
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-gray-300 text-slate-800 hover:bg-gray-50"
                )}
              >
                ورود
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-transparent pointer-events-none"
        )}
        onClick={closeMobileMenu}
      >
        <aside
          className={cn(
            "mobile-menu-container absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-white shadow-xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-xl font-bold text-primary">خوارزم</div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="بستن منو"
            >
              <X className="h-5 w-5 text-slate-800" />
            </button>
          </div>

          <div className="flex flex-col h-full">
            <nav className="flex-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-6 py-4 text-base font-medium transition-colors border-r-4",
                    pathname === item.href
                      ? "bg-primary/10 text-primary border-primary"
                      : "text-slate-800 hover:bg-gray-50 border-transparent hover:border-gray-200"
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-200 space-y-3">
              {!isAuthPage && (
                <div className="flex gap-3">
                  <Link
                    href="/auth/login"
                    className="flex-1 py-3 text-center rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    ورود
                  </Link>
                  <Link
                    href="/auth/register"
                    className="flex-1 py-3 text-center rounded-md bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    ثبت‌نام
                  </Link>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {!isHaveBackgroundPage && <div className="h-8 lg:h-20"></div>}
    </header>
  );
}
