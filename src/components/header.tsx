"use client"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"
import { MapPin, Calendar, X, Sun, Moon, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const mainNav = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isHomepage = pathname === "/"
  const isAuthPage = pathname.startsWith("/auth")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
      setIsTransparent(scrollPosition < 50)
    }

    if (isHomepage) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomepage])

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const cartItemsCount = cart.items.reduce((count, item) => count + item.quantity, 0)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="w-full max-w-full overflow-x-hidden">
      {/* Hero Section - Only on Homepage */}
      {isHomepage && (
        <div
          className="items-center bg-cover bg-center bg-no-repeat pb-32 sm:pb-40 md:pb-56"
          style={{ backgroundImage: "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')" }}
        >
          {/* Navigation Bar for Homepage */}
          <nav
            className={cn(
              "fixed left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-4 lg:px-0 lg:py-5 duration-200 transition-all",
              isTransparent ? "bg-transparent text-white" : "bg-white/95 backdrop-blur-sm text-slate-800 shadow-md",
            )}
          >
            <div className="mx-auto flex h-[38px] max-w-[1200px] items-center justify-between lg:h-[54px]">
              {/* Left Side - Mobile Menu Button and Logo */}
              <div className="flex shrink-0 items-center gap-x-3">
                <button
                  className="flex w-6 flex-col items-stretch gap-y-1 md:hidden transition-colors duration-200"
                  onClick={toggleMobileMenu}
                  aria-label="منوی اصلی"
                >
                  <span className="sr-only">Open main menu</span>
                  <div
                    className={cn(
                      "h-0.5 rounded-full bg-current transition-transform duration-200",
                      isMobileMenuOpen && "rotate-45 translate-y-1.5",
                    )}
                  ></div>
                  <div
                    className={cn(
                      "h-0.5 rounded-full bg-current transition-opacity duration-200",
                      isMobileMenuOpen && "opacity-0",
                    )}
                  ></div>
                  <div
                    className={cn(
                      "h-0.5 rounded-full bg-current transition-transform duration-200",
                      isMobileMenuOpen && "-rotate-45 -translate-y-1.5",
                    )}
                  ></div>
                </button>
                <Link href="/" className="flex-shrink-0">
                  <div
                    className={cn(
                      "text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-200",
                      isTransparent ? "text-white" : "text-primary",
                    )}
                  >
                    خوارزم
                  </div>
                </Link>
              </div>

              {/* Center - Desktop Navigation Links */}
              <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 lg:px-4 py-2 lg:py-3 transition-all duration-200 text-sm lg:text-base font-medium",
                      pathname === item.href
                        ? isTransparent
                          ? "text-white bg-white/20 rounded-md"
                          : "text-primary bg-primary/10 rounded-md"
                        : isTransparent
                          ? "text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                          : "text-slate-800 hover:text-primary hover:bg-primary/5 rounded-md",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Right Side - Actions */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Theme Toggle - Hidden on small screens */}
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className={cn(
                      "hidden sm:flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-md transition-all duration-200",
                      isTransparent
                        ? "border border-white/30 text-white hover:bg-white/10"
                        : "border border-gray-300 text-slate-800 hover:bg-gray-50",
                    )}
                    aria-label="تغییر تم"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-3 w-3 lg:h-4 lg:w-4" />
                    ) : (
                      <Moon className="h-3 w-3 lg:h-4 lg:w-4" />
                    )}
                  </button>
                )}

                {/* Shopping Cart */}
                <Link
                  href="/cart"
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-md transition-all duration-200",
                    isTransparent
                      ? "border border-white/30 text-white hover:bg-white/10"
                      : "border border-gray-300 text-slate-800 hover:bg-gray-50",
                  )}
                >
                  <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                      {cartItemsCount > 9 ? "9+" : cartItemsCount}
                    </span>
                  )}
                </Link>

                {/* Auth Buttons - Responsive */}
                <div className="hidden sm:flex items-center gap-1.5 lg:gap-2">
                  <Link
                    href="/auth/register"
                    className={cn(
                      "flex items-center rounded-md px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 transition-all duration-200",
                      isTransparent
                        ? "bg-white text-slate-800 hover:bg-gray-50"
                        : "bg-primary text-white hover:bg-primary/90",
                    )}
                  >
                    ثبت‌نام
                  </Link>
                  <Link
                    href="/auth/login"
                    className={cn(
                      "flex items-center rounded-md border px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 transition-all duration-200",
                      isTransparent
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-gray-300 text-slate-800 hover:bg-gray-50",
                    )}
                  >
                    ورود
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="h-[60px] sm:h-[70px] lg:h-[94px]"></div>
          <div className="h-4 sm:h-6 lg:h-16"></div>
          <div className="mx-auto flex px-4 sm:px-6 max-lg:flex-col lg:max-w-[1200px] lg:flex-row lg:px-6">
            <div className="w-full lg:flex-1">
              <h1 className="font-bold not-italic text-white mb-4 sm:mb-6 lg:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108px] leading-tight lg:leading-[106px] tracking-tight lg:tracking-[-2.16px]">
                فروشگاه آنلاین خوارزم
              </h1>
              <div className="font-semibold not-italic leading-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight lg:tracking-[-0.48px]">
                <p className="mb-4 lg:mb-6">خرید آسان، سریع و مطمئن از بهترین محصولات ایرانی</p>
                <div className="flex flex-col gap-3 sm:gap-4 lg:flex-col">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                    <p className="font-normal text-white/80 text-sm sm:text-base lg:text-xl">
                      تهران، ایران - سراسر کشور
                    </p>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                    <p className="font-normal text-white/80 text-sm sm:text-base lg:text-xl">۲۴ ساعته، ۷ روز هفته</p>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-[52px] font-bold text-white mt-6 sm:mt-8 lg:mt-[52px] mb-8 sm:mb-12 lg:mb-16 text-base sm:text-2xl lg:text-5xl tracking-tight lg:tracking-[-0.96px] overflow-x-auto">
                <div className="flex flex-col items-center gap-1 lg:gap-3 flex-shrink-0">
                  <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                    00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">روز</p>
                </div>
                <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl flex-shrink-0">:</div>
                <div className="flex flex-col items-center gap-1 lg:gap-3 flex-shrink-0">
                  <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                    00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">ساعت</p>
                </div>
                <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl flex-shrink-0">:</div>
                <div className="flex flex-col items-center gap-1 lg:gap-3 flex-shrink-0">
                  <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                    00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">دقیقه</p>
                </div>
                <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl flex-shrink-0">:</div>
                <div className="flex flex-col items-center gap-1 lg:gap-3 flex-shrink-0">
                  <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                    00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">ثانیه</p>
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-center lg:text-right mt-8 lg:mt-0 lg:mr-8 xl:mr-16 flex-shrink-0 lg:min-w-[250px] xl:min-w-[300px]">
              {[
                { number: "۱۰۰+", label: "دسته‌بندی محصولات" },
                { number: "۵۰۰۰+", label: "مشتری راضی" },
                { number: "۱۰۰۰+", label: "محصول متنوع" },
                { number: "۲۴/۷", label: "پشتیبانی آنلاین" },
                { number: "۵+", label: "سال تجربه" },
                { number: "۱۰۰+", label: "فروشنده معتبر" },
              ].map((stat, index) => (
                <div key={index} className="flex-shrink-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
                    {stat.number}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Universal Navigation Bar for All Other Pages */}
      {!isHomepage && (
        <nav className="relative bg-white border-b border-neutral-200 text-slate-800 dark:bg-gray-900 dark:border-gray-700 dark:text-white z-50 px-4 py-3 sm:px-6 sm:py-4 lg:px-0 lg:py-5 w-full">
          <div className="mx-auto flex h-[38px] max-w-[1200px] items-center justify-between lg:h-[54px]">
            {/* Left Side - Mobile Menu Button and Logo */}
            <div className="flex shrink-0 items-center gap-x-3">
              <button
                className="flex w-6 flex-col items-stretch gap-y-1 md:hidden transition-colors duration-200"
                onClick={toggleMobileMenu}
                aria-label="منوی اصلی"
              >
                <span className="sr-only">Open main menu</span>
                <div
                  className={cn(
                    "h-0.5 rounded-full bg-current transition-transform duration-200",
                    isMobileMenuOpen && "rotate-45 translate-y-1.5",
                  )}
                ></div>
                <div
                  className={cn(
                    "h-0.5 rounded-full bg-current transition-opacity duration-200",
                    isMobileMenuOpen && "opacity-0",
                  )}
                ></div>
                <div
                  className={cn(
                    "h-0.5 rounded-full bg-current transition-transform duration-200",
                    isMobileMenuOpen && "-rotate-45 -translate-y-1.5",
                  )}
                ></div>
              </button>
              <Link href="/" className="flex-shrink-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">خوارزم</div>
              </Link>
            </div>

            {/* Center - Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 lg:px-4 py-2 lg:py-3 transition-all duration-200 text-sm lg:text-base font-medium",
                    pathname === item.href
                      ? "text-primary bg-primary/10 rounded-md"
                      : "text-slate-800 hover:text-primary hover:bg-primary/5 rounded-md",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Theme Toggle - Hidden on small screens */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="hidden sm:flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-md border border-gray-300 text-slate-800 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-all duration-200"
                  aria-label="تغییر تم"
                >
                  {theme === "dark" ? (
                    <Sun className="h-3 w-3 lg:h-4 lg:w-4" />
                  ) : (
                    <Moon className="h-3 w-3 lg:h-4 lg:w-4" />
                  )}
                </button>
              )}

              {/* Shopping Cart */}
              {!isAuthPage && (
                <Link
                  href="/cart"
                  className="relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-md border border-gray-300 text-slate-800 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                      {cartItemsCount > 9 ? "9+" : cartItemsCount}
                    </span>
                  )}
                </Link>
              )}

              {/* Auth Buttons - Responsive */}
              {!isAuthPage && (
                <div className="hidden sm:flex items-center gap-1.5 lg:gap-2">
                  <Link
                    href="/auth/register"
                    className="flex items-center rounded-md px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 bg-primary text-white hover:bg-primary/90 transition-all duration-200"
                  >
                    ثبت‌نام
                  </Link>
                  <Link
                    href="/auth/login"
                    className="flex items-center rounded-md border px-3 lg:px-6 text-xs lg:text-base font-semibold h-8 lg:h-12 border-gray-300 text-slate-800 hover:bg-gray-50 transition-all duration-200"
                  >
                    ورود
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "bg-black/50 backdrop-blur-sm" : "bg-transparent pointer-events-none",
        )}
        onClick={closeMobileMenu}
      >
        {/* Mobile Menu Sidebar */}
        <aside
          className={cn(
            "mobile-menu-container absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-white shadow-xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
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

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav className="flex-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-6 py-4 text-base font-medium transition-colors border-r-4",
                    pathname === item.href
                      ? "bg-primary/10 text-primary border-primary"
                      : "text-slate-800 hover:bg-gray-50 border-transparent hover:border-gray-200",
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 space-y-3">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full py-3 rounded-md border border-gray-300 text-slate-800 hover:bg-gray-50 transition-colors"
                  aria-label="تغییر تم"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 ml-2" />
                      حالت روز
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 ml-2" />
                      حالت شب
                    </>
                  )}
                </button>
              )}

              {/* Auth Buttons */}
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
    </header>
  )
}
