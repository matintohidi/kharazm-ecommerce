"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "ورود موفقیت‌آمیز",
      description: "شما با موفقیت وارد حساب کاربری خود شدید.",
    });

    router.push("/account");
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);

    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "ورود با گوگل موفقیت‌آمیز",
      description: "شما با موفقیت وارد حساب کاربری خود شدید.",
    });

    router.push("/account");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Visual Section - 60% on desktop */}
      <div className="hidden lg:flex lg:w-[60%] relative">
        <div
          className="w-full bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-8">
            <div className="max-w-md text-center">
              <h1 className="text-4xl xl:text-5xl font-bold mb-4">خوش آمدید</h1>
              <p className="text-lg xl:text-xl mb-8 leading-relaxed opacity-90">
                به فروشگاه آنلاین خوارزم خوش آمدید. با ورود به حساب کاربری خود،
                از تمامی امکانات ما بهره‌مند شوید.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">
                    ۵۰۰۰+
                  </div>
                  <div className="text-white/80 text-sm">مشتری راضی</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">
                    ۱۰۰۰+
                  </div>
                  <div className="text-white/80 text-sm">محصول متنوع</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">
                    ۲۴/۷
                  </div>
                  <div className="text-white/80 text-sm">پشتیبانی</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">۵+</div>
                  <div className="text-white/80 text-sm">سال تجربه</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section - 40% on desktop, full width on mobile */}
      <div className="w-full lg:w-[40%] flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm px-6 lg:px-8">
          <div className="text-center mb-6">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                خوارزم
              </div>
            </Link>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">
              ورود به حساب کاربری
            </h2>
            <p className="text-sm text-slate-800">
              به فروشگاه خوارزم خوش آمدید
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Google Login Button */}
            <Button
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading}
              variant="outline"
              className="w-full mb-4 h-11 border-2 hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-4 w-4 ml-2 text-red-500" />
              {isGoogleLoading ? "در حال ورود..." : "ورود با Gmail"}
            </Button>

            {/* Divider */}
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-slate-800">یا</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-slate-800 text-sm">
                  ایمیل
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                  placeholder="example@email.com"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-800 text-sm">
                    رمز عبور
                  </Label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs text-primary hover:underline"
                  >
                    فراموشی رمز عبور
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "در حال ورود..." : "ورود"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-800">
                حساب کاربری ندارید؟{" "}
                <Link
                  href="/auth/register"
                  className="text-primary hover:underline font-medium"
                >
                  ثبت‌نام کنید
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
