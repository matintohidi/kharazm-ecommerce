"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "پیام شما با موفقیت ارسال شد",
      description: "کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.",
    });

    setIsSubmitting(false);
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="relative w-full">
        <div
          className="absolute left-0 right-0 top-0 -z-10 h-[350px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')",
          }}
        ></div>
        <div className="mx-auto max-w-[1200px] rounded-2xl bg-white shadow-[0px_30px_60px_0px_rgba(189,192,199,0.10)] mt-24 mb-16">
          <div className="flex max-w-[1199px] flex-col items-start justify-center gap-8 px-[72px] py-[60px]">
            <div className="flex flex-row items-start justify-between self-stretch lg:max-w-[1055px]">
              <div className="flex-col gap-2">
                <p className="text-[20px] font-medium uppercase not-italic leading-[normal] tracking-[0.8px] text-[#8A8998]">
                  ارتباط با ما
                </p>
                <p className="text-[76px] font-bold not-italic leading-[76px] tracking-[-1.52px] text-[#1F2B3D]">
                  تماس با ما
                </p>
                <p className="flex items-center justify-center gap-[13px] pb-4 pt-10 text-lg leading-relaxed text-neutral-400">
                  ما همیشه آماده پاسخگویی به سوالات، پیشنهادات و انتقادات شما
                  عزیزان هستیم. تیم پشتیبانی خوارزم با تجربه و تخصص کافی، آماده
                  ارائه بهترین خدمات به شما است.
                </p>
                <p className="flex items-center justify-center gap-[13px] py-4 text-lg leading-relaxed text-neutral-400">
                  شما می‌توانید از طریق راه‌های مختلف ارتباطی با ما در تماس
                  باشید. تیم ما در ساعات کاری آماده پاسخگویی به شما است و در
                  اسرع وقت به پیام‌های شما پاسخ خواهیم داد.
                </p>
                <p className="flex items-center justify-center gap-[13px] py-4 text-lg leading-relaxed text-neutral-400">
                  برای ارسال پیام، شکایت، پیشنهاد یا هر گونه سوال، می‌توانید از
                  فرم تماس استفاده کنید یا مستقیماً با شماره‌های تماس ما در
                  ارتباط باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">اطلاعات تماس</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full ml-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">آدرس</h3>
                    <p className="text-muted-foreground">
                      تهران، خیابان ولیعصر، خیابان فرشته، پلاک ۱۲۳
                      <br />
                      کد پستی: ۱۹۶۷۸۴۳۱۱۰
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full ml-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">تلفن تماس</h3>
                    <p className="text-muted-foreground" dir="ltr">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                      <br />
                      ۰۹۱۲۳۴۵۶۷۸۹
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full ml-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">ایمیل</h3>
                    <p className="text-muted-foreground">
                      info@kharazm.com
                      <br />
                      support@kharazm.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">ساعات کاری</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      شنبه تا چهارشنبه
                    </span>
                    <span>۹:۰۰ الی ۱۸:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">پنجشنبه</span>
                    <span>۹:۰۰ الی ۱۴:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">جمعه</span>
                    <span>تعطیل</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">ارسال پیام</h2>
              <p className="text-muted-foreground mb-6">
                برای ارسال سوالات، پیشنهادات یا انتقادات خود، فرم زیر را تکمیل
                کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">موضوع</Label>
                  <Input id="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">پیام</Label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
