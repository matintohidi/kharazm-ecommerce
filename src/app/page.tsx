import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import { Star, ArrowLeft, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <main className="flex-1">
      {/* Enhanced Featured Products Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              محصولات ویژه
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              بهترین انتخاب‌های امروز
            </h2>
            <p className="text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed">
              مجموعه‌ای از محبوب‌ترین و با کیفیت‌ترین محصولات را کشف کنید که با دقت برای شما انتخاب شده‌اند
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Product Card with Enhanced Styling */}
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary/20">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg?height=400&width=400"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Discount Badge */}
                    {product.discount && product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                        {product.discount}٪ تخفیف
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                        <Star className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 mr-2">({product.reviewCount})</span>
                    </div>

                    <h3 className="font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-800">
                          {product.price.toLocaleString("fa-IR")} تومان
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice.toLocaleString("fa-IR")} تومان
                          </span>
                        )}
                      </div>
                    </div>

                    <ProductCard product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
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
            <p className="text-slate-800 mt-4">بیش از ۱۰۰۰ محصول متنوع در انتظار شماست</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 relative">
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
              با عضویت در خبرنامه خوارزم، اولین نفری باشید که از تخفیف‌های ویژه و محصولات جدید مطلع می‌شوید
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

            <p className="text-sm text-slate-800 mt-4">با عضویت، شرایط و قوانین خبرنامه را می‌پذیرید</p>
          </div>
        </div>
      </section>
    </main>
  )
}
