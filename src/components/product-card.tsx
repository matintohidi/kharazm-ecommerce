import { AddToCartButton } from "@/components/add-to-cart-button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/lib/services";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-square">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        {/* <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.discount && product.discount > 0 ? (
            <span className="bg-red-400 text-white text-xs px-2 py-1 rounded-2xl">
              {product.discount.toLocaleString("fa-IR")}٪ تخفیف
            </span>
          ) : null}
        </div> */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className="h-4 w-4 text-slate-800" />
          </button>
          <Link
            href={`/products/${product.id}`}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
            aria-label="مشاهده محصول"
          >
            <Eye className="h-4 w-4 text-slate-800" />
          </Link>
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-1 text-slate-800">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2">
          {/* <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              {formatPrice(product.price)} تومان
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)} تومان
              </span>
            )}
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
