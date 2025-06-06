"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { LoginForm } from "@/app/auth/login/_components/form";

export default function LoginPage() {
  return (
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
          <p className="text-sm text-slate-800">به فروشگاه خوارزم خوش آمدید</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Button
            disabled={true}
            variant="outline"
            className="w-full mb-4 h-11 border-2 hover:bg-gray-50 transition-colors"
          >
            <Mail className="h-4 w-4 ml-2 text-red-500" />
            ورود با Gmail
          </Button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-slate-800">یا</span>
            </div>
          </div>

          <LoginForm />

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
  );
}
