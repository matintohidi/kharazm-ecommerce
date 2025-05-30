import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";
import {
  Star,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="flex-1">
      <section
        className="items-center bg-cover bg-center bg-no-repeat pb-32 sm:pb-40 md:pb-56"
        style={{
          backgroundImage:
            "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')",
        }}
      >
        <div className="h-[60px] sm:h-[70px] lg:h-[94px]"></div>
        <div className="h-4 sm:h-6 lg:h-16"></div>
        <div className="mx-auto flex px-4 sm:px-6 max-lg:flex-col lg:max-w-[1200px] lg:flex-row lg:px-6">
          <div className="w-full lg:flex-1">
            <h1 className="font-bold not-italic text-white mb-4 sm:mb-6 lg:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108px] leading-tight lg:leading-[106px] tracking-tight lg:tracking-[-2.16px]">
              فروشگاه آنلاین خوارزم
            </h1>
            <div className="font-semibold not-italic leading-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight lg:tracking-[-0.48px]">
              <p className="mb-4 lg:mb-6">
                خرید آسان، سریع و مطمئن از بهترین محصولات ایرانی
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 lg:flex-col">
                <div className="flex items-center gap-2 lg:gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 shrink-0" />
                  <p className="font-normal text-white/80 text-sm sm:text-base lg:text-xl">
                    تهران، ایران - سراسر کشور
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 shrink-0" />
                  <p className="font-normal text-white/80 text-sm sm:text-base lg:text-xl">
                    ۲۴ ساعته، ۷ روز هفته
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-[52px] font-bold text-white mt-6 sm:mt-8 lg:mt-[52px] mb-8 sm:mb-12 lg:mb-16 text-base sm:text-2xl lg:text-5xl tracking-tight lg:tracking-[-0.96px] overflow-x-auto">
              <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
                <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                  ۵۴
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
                  ثانیه
                </p>
              </div>
              <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
                :
              </div>
              <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
                <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                  ۱۶
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
                  دقیقه
                </p>
              </div>
              <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
                :
              </div>
              <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
                <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                  ۰۳
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
                  ساعت
                </p>
              </div>
              <div className="font-bold text-white text-base sm:text-2xl lg:text-5xl shrink-0">
                :
              </div>
              <div className="flex flex-col items-center gap-1 lg:gap-3 shrink-0">
                <div className="flex items-center justify-center rounded-lg border border-white/30 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 tabular-nums min-w-[35px] sm:min-w-[45px] lg:min-w-[60px]">
                  ۱۰
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white">
                  روز
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-center lg:text-right mt-8 lg:mt-0 lg:mr-8 xl:mr-16 shrink-0 lg:min-w-[250px] xl:min-w-[300px]">
            {[
              { number: "+۱۰۰", label: "دسته‌بندی محصولات" },
              { number: "+۵۰۰۰", label: "مشتری راضی" },
              { number: "+۱۰۰۰", label: "محصول متنوع" },
              { number: "۲۴/۷", label: "پشتیبانی آنلاین" },
              { number: "+۵", label: "سال تجربه" },
              { number: "+۱۰۰", label: "فروشنده معتبر" },
            ].map((stat, index) => (
              <div key={index} className="shrink-0 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white text-reve">
                  {stat.number}
                </p>
                <p className="text-white/80 text-xs sm:text-sm lg:text-base mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              محصولات ویژه
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              بهترین انتخاب‌های امروز
            </h2>
            <p className="text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed">
              مجموعه‌ای از محبوب‌ترین و با کیفیت‌ترین محصولات را کشف کنید که با
              دقت برای شما انتخاب شده‌اند
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="min-h-[480px] flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary/20">
                  <div className="relative aspect-square overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
                    <Image
                      src={
                        product.image || "/placeholder.svg?height=400&width=400"
                      }
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {product.discount && product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                        {product.discount.toLocaleString("fa-IR")}٪ تخفیف
                      </div>
                    )}

                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                        <Star className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="flex-1 flex flex-col p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 mr-2">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xl font-bold text-slate-800">
                            {product.price.toLocaleString("fa-IR")} تومان
                          </span>
                          {product.originalPrice &&
                            product.originalPrice > product.price && (
                              <span className="text-sm text-gray-400 line-through">
                                {product.originalPrice.toLocaleString("fa-IR")}{" "}
                                تومان
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                مشاهده همه محصولات
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-slate-800 mt-4">
              بیش از ۱۰۰۰ محصول متنوع در انتظار شماست
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-linear-to-r from-primary/5 via-blue-50/50 to-primary/5 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=pattern')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              عضویت در خبرنامه
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">
              از آخرین تخفیف‌ها و محصولات جدید باخبر شوید
            </h2>
            <p className="text-lg text-slate-800 mb-8 leading-relaxed">
              با عضویت در خبرنامه خوارزم، اولین نفری باشید که از تخفیف‌های ویژه
              و محصولات جدید مطلع می‌شوید
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white shadow-sm"
                />
              </div>
              <Button
                type="submit"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                عضویت
              </Button>
            </form>

            <p className="text-sm text-slate-800 mt-4">
              با عضویت، شرایط و قوانین خبرنامه را می‌پذیرید
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
