"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  return (
    <div className={`flex h-screen ${isLogin && "flex-row-reverse"}`}>
      <div className="hidden lg:flex lg:w-[60%] relative">
        <div
          className="w-full bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-8">
            <div className="max-w-md text-center">
              <h1 className="text-4xl xl:text-5xl font-bold mb-4">خوش آمدید</h1>
              <p className="text-lg xl:text-xl mb-8 leading-relaxed opacity-90">
                به فروشگاه آنلاین خوارزم خوش آمدید. با استفاده از حساب کاربری
                خود، از تمامی امکانات ما بهره‌مند شوید.
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

      {children}
    </div>
  );
};

export default AuthTemplate;
