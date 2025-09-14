"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@/providers/user-provider";
import { cn } from "@/lib/utils";
import { User, LogOut, Settings, ShoppingBag, Heart } from "lucide-react";

interface HeaderUserProps {
  isTransparent?: boolean;
  isHaveBackgroundPage?: boolean;
}

export default function HeaderUser({
  isTransparent = false,
  isHaveBackgroundPage = false,
}: HeaderUserProps) {
  const { user, setUser } = useUser();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    setUser(undefined);
    setIsDropdownOpen(false);
    // Clear any stored tokens or session data if needed
    localStorage.removeItem("authToken");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!user) {
    return (
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
    );
  }

  // Get user display name
  const displayName =
    user.first_name && user.last_name
      ? `${user.first_name} ${user.last_name}`
      : user.first_name || user.username;

  // Get user initials for avatar
  const getInitials = () => {
    if (user.first_name && user.last_name) {
      return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`;
    }
    if (user.first_name) {
      return user.first_name.charAt(0);
    }
    if (user.username) {
      return user.username.charAt(0);
    }

    return "U"; // Default fallback initial
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200",
          isTransparent && isHaveBackgroundPage
            ? "text-white hover:bg-white/10"
            : "text-slate-800 hover:bg-gray-50"
        )}
      >
        {/* User Avatar */}
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full text-sm lg:text-base font-semibold",
            isTransparent && isHaveBackgroundPage
              ? "bg-white/20 text-white"
              : "bg-primary/10 text-primary"
          )}
        >
          {getInitials().toUpperCase()}
        </div>

        {/* User Name - Hidden on small screens */}
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-medium truncate max-w-24 lg:max-w-32">
            {displayName}
          </span>
          {user.email && (
            <span
              className={cn(
                "text-xs opacity-75 truncate max-w-24 lg:max-w-32",
                isTransparent && isHaveBackgroundPage
                  ? "text-white/70"
                  : "text-slate-600"
              )}
            >
              {user.email}
            </span>
          )}
        </div>

        {/* Dropdown Arrow */}
        <div
          className={cn(
            "transition-transform duration-200",
            isDropdownOpen && "rotate-180"
          )}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {getInitials().toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {displayName}
                </p>
                {user.email && (
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <Link
              href="/account"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <User className="w-4 h-4" />
              حساب کاربری
            </Link>

            <Link
              href="/account/orders"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <ShoppingBag className="w-4 h-4" />
              سفارش‌های من
            </Link>

            <Link
              href="/account/wishlist"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <Heart className="w-4 h-4" />
              علاقه‌مندی‌ها
            </Link>

            <Link
              href="/account/settings"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              <Settings className="w-4 h-4" />
              تنظیمات
            </Link>
          </div>

          <div className="border-t border-gray-100 py-1">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
