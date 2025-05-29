"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "ثبت‌نام موفقیت‌آمیز",
      description: "حساب کاربری شما با موفقیت ایجاد شد.",
    })

    router.push("/account")
  }

  const handleGoogleSignup = async () => {
    setIsGoogleLoading(true)

    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "ثبت‌نام با گوگل موفقیت‌آمیز",
      description: "حساب کاربری شما با موفقیت ایجاد شد.",
    })

    router.push("/account")
  }

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Visual Section - 60% on desktop */}
      <div className="hidden lg:flex lg:w-[60%] relative">
        <div
          className="w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-8">
            <div className="max-w-md text-center">
              <h1 className="text-4xl xl:text-5xl font-bold mb-4">عضو خانواده شوید</h1>
              <p className="text-lg xl:text-xl mb-8 leading-relaxed opacity-90">
                با ایجاد حساب کاربری در خوارزم، از تخفیف‌های ویژه و خدمات منحصر به فرد ما بهره‌مند شوید.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">رایگان</div>
                  <div className="text-white/80 text-sm">عضویت</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">سریع</div>
                  <div className="text-white/80 text-sm">ارسال</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">امن</div>
                  <div className="text-white/80 text-sm">پرداخت</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold mb-1">ویژه</div>
                  <div className="text-white/80 text-sm">تخفیف‌ها</div>
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
              <div className="text-2xl lg:text-3xl font-bold text-primary">خوارزم</div>
            </Link>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">ایجاد حساب کاربری</h2>
            <p className="text-sm text-slate-800">برای خرید از فروشگاه خوارزم ثبت‌نام کنید</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Google Signup Button */}
            <Button
              onClick={handleGoogleSignup}
              disabled={isGoogleLoading}
              variant="outline"
              className="w-full mb-4 h-11 border-2 hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-4 w-4 ml-2 text-red-500" />
              {isGoogleLoading ? "در حال ثبت‌نام..." : "ثبت‌نام با Gmail"}
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

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="username" className="text-slate-800 text-sm">
                  نام کاربری
                </Label>
                <Input
                  id="username"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20"
                  placeholder="نام کاربری خود را وارد کنید"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-slate-800 text-sm">
                  ایمیل
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20"
                  placeholder="example@email.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-slate-800 text-sm">
                  رمز عبور
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20"
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
              <div className="flex items-center space-x-2 space-x-reverse pt-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-xs text-slate-800">
                  با{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    قوانین و مقررات
                  </Link>{" "}
                  موافقم
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-800">
                قبلاً ثبت‌نام کرده‌اید؟{" "}
                <Link href="/auth/login" className="text-primary hover:underline font-medium">
                  وارد شوید
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
