import { Button } from "@/components/ui/button"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { ProductCard } from "@/components/product-card"
import { formatPrice } from "@/lib/utils"
import { Truck, ShieldCheck, RotateCcw, Star } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category)

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviewCount} نظر)</span>
          </div>

          <div className="text-2xl font-bold mb-6">{formatPrice(product.price)} تومان</div>

          {product.discount > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm line-through text-muted-foreground">
                {formatPrice(product.originalPrice)} تومان
              </span>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">{product.discount}٪ تخفیف</span>
            </div>
          )}

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">رنگ:</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">سایز:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border border-gray-300 rounded hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <div className="flex gap-4 mt-auto">
            <AddToCartButton product={product} />
            <Button variant="outline">افزودن به علاقه‌مندی‌ها</Button>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-border mt-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">ارسال سریع</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">ضمانت اصالت کالا</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">۷ روز ضمانت بازگشت</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
