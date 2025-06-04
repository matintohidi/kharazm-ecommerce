import {
  Mail,
  MapPin,
  Phone,
  Building,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white pb-7 pt-14 text-slate-800">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-8 flex items-center justify-between gap-y-4 max-md:flex-col">
          <div className="max-md:text-center">
            <p className="max-w-prose text-sm text-slate-800">
              فروشگاه آنلاین خوارزم، ارائه‌دهنده بهترین محصولات با کیفیت و قیمت
              مناسب برای مشتریان عزیز ایرانی
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/kharazm_shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted hover:bg-muted transition"
            >
              <Instagram className="w-6 h-6 text-muted-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/kharazm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted hover:bg-muted transition"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground" />
            </Link>
            <Link
              href="https://www.youtube.com/@kharazm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted hover:bg-muted transition"
            >
              <Youtube className="w-6 h-6 text-muted-foreground" />
            </Link>
            <Link
              href="https://twitter.com/kharazm_shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted hover:bg-muted transition"
            >
              <Twitter className="w-6 h-6 text-muted-foreground" />
            </Link>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 items-start gap-7 sm:grid-cols-2 md:grid-cols-4">
          <Link
            href="https://maps.app.goo.gl/kharazm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Building className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">
                مکان
              </p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800">
                فروشگاه آنلاین خوارزم
              </p>
            </div>
          </Link>

          <Link
            href="https://maps.app.goo.gl/kharazm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <MapPin className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">
                آدرس
              </p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800">
                خیابان ولیعصر، تهران، ایران
              </p>
            </div>
          </Link>

          <Link
            href="mailto:info@kharazm.com"
            className="flex items-center justify-start gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Mail className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">
                ایمیل
              </p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800">
                info@kharazm.com
              </p>
            </div>
          </Link>

          <Link
            href="tel:+982112345678"
            className="flex items-center justify-start gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Phone className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">
                تلفن
              </p>
              <p
                className="flex items-center justify-start text-sm font-semibold text-slate-800"
                dir="ltr"
              >
                +۹۸ (۰۲۱) ۱۲۳۴۵۶۷۸
              </p>
            </div>
          </Link>
        </div>

        <div className="flex-row-reverse items-center justify-between">
          <p className="text-right text-sm text-slate-800">
            © ۲۰۲۵-{currentYear}، تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
}
