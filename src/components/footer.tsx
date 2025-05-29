import { Mail, MapPin, Phone, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-white pb-7 pt-14 text-slate-800">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Partners/Sponsors Section */}
        <div className="flex items-center justify-between gap-y-4 max-md:flex-col">
          <Link href="/">
            <Image
              alt="خوارزم"
              width={71}
              height={47}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=47&width=71&text=خوارزم"
            />
          </Link>
          <Link href="https://digikala.com/" target="_blank">
            <Image
              alt="دیجی‌کالا"
              width={100}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=100&text=دیجی‌کالا"
            />
          </Link>
          <Link href="https://snappfood.ir/" target="_blank">
            <Image
              alt="اسنپ‌فود"
              width={95}
              height={46}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=46&width=95&text=اسنپ‌فود"
            />
          </Link>
          <Link href="https://tapsi.ir/" target="_blank">
            <Image
              alt="تپسی"
              width={100}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=100&text=تپسی"
            />
          </Link>
          <Link href="https://cafebazaar.ir/" target="_blank">
            <Image
              alt="کافه‌بازار"
              width={130}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=130&text=کافه‌بازار"
            />
          </Link>
          <Link href="https://alibaba.ir/" target="_blank">
            <Image
              alt="علی‌بابا"
              width={100}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=100&text=علی‌بابا"
            />
          </Link>
          <Link href="https://torob.com/" target="_blank">
            <Image
              alt="ترب"
              width={80}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=80&text=ترب"
            />
          </Link>
          <Link href="https://zarin.link/" target="_blank">
            <Image
              alt="زرین‌لینک"
              width={100}
              height={40}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              src="/placeholder.svg?height=40&width=100&text=زرین‌لینک"
            />
          </Link>
        </div>

        {/* Description and Social Media */}
        <div className="my-8 flex items-center justify-between gap-y-4 max-md:flex-col">
          <div className="max-md:text-center">
            <p className="max-w-prose text-sm text-slate-800">
              فروشگاه آنلاین خوارزم، ارائه‌دهنده بهترین محصولات با کیفیت و قیمت مناسب برای مشتریان عزیز ایرانی
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://t.me/kharazm_shop" target="_blank" rel="noopener noreferrer">
              <Image alt="تلگرام" width={56} height={56} src="/placeholder.svg?height=56&width=56&text=T" />
            </Link>
            <Link href="https://www.instagram.com/kharazm_shop" target="_blank" rel="noopener noreferrer">
              <Image alt="اینستاگرام" width={56} height={56} src="/placeholder.svg?height=56&width=56&text=I" />
            </Link>
            <Link href="https://www.linkedin.com/company/kharazm" target="_blank" rel="noopener noreferrer">
              <Image alt="لینکدین" width={56} height={56} src="/placeholder.svg?height=56&width=56&text=L" />
            </Link>
            <Link href="https://www.youtube.com/@kharazm" target="_blank" rel="noopener noreferrer">
              <Image alt="یوتیوب" width={56} height={56} src="/placeholder.svg?height=56&width=56&text=Y" />
            </Link>
            <Link href="https://twitter.com/kharazm_shop" target="_blank" rel="noopener noreferrer">
              <Image alt="توییتر" width={56} height={56} src="/placeholder.svg?height=56&width=56&text=X" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
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
              <p className="flex items-center justify-start text-sm text-gray-500">مکان</p>
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
              <p className="flex items-center justify-start text-sm text-gray-500">آدرس</p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800">
                خیابان ولیعصر، تهران، ایران
              </p>
            </div>
          </Link>

          <Link href="mailto:info@kharazm.com" className="flex items-center justify-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Mail className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">ایمیل</p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800">info@kharazm.com</p>
            </div>
          </Link>

          <Link href="tel:+982112345678" className="flex items-center justify-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Phone className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-start text-sm text-gray-500">تلفن</p>
              <p className="flex items-center justify-start text-sm font-semibold text-slate-800" dir="ltr">
                +۹۸ (۰۲۱) ۱۲۳۴۵۶۷۸
              </p>
            </div>
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex-row-reverse items-center justify-between">
          <p className="text-right text-sm text-slate-800">© ۲۰۱۵-{currentYear}، تمامی حقوق محفوظ است</p>
        </div>
      </div>
    </footer>
  )
}
