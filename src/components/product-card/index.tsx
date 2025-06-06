import { AddToCartButton } from "@/components/add-to-cart";
import { Rating } from "@/components/rating";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/services";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    category,
    in_stock,
    name,
    price,
    description,
    discount,
    image,
    reviews,
    sale_price,
    token,
  } = product;

  return (
    <Card className="overflow-hidden group flex flex-col">
      <div className="relative aspect-square">
        <Link href={`/products/${token}`}>
          <Image
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {discount && discount > 0 ? (
            <span className="bg-red-400 text-white text-xs px-2 py-1 rounded-2xl">
              {discount.toLocaleString("fa-IR")}٪ تخفیف
            </span>
          ) : null}
        </div>
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className="h-4 w-4 text-slate-800" />
          </button>
          <Link
            href={`/products/${token}`}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
            aria-label="مشاهده محصول"
          >
            <Eye className="h-4 w-4 text-slate-800" />
          </Link>
        </div>
      </div>
      <CardContent className="p-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Rating product={product} />
            <span className="text-sm text-gray-500 mr-2">
              {`(${reviews?.length || 0})`}
            </span>
          </div>

          <Badge>{category.name}</Badge>
        </div>

        <Link href={`/products/${token}`}>
          <CardTitle className="font-medium text-md line-clamp-1 text-slate-800 hover:text-primary hover:underline mb-2">
            {name}
          </CardTitle>
        </Link>

        <CardDescription className="font-light text-slate-500 text-xs line-clamp-2 transition-colors">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="block p-4 pt-0">
        <div className="mt-auto flex items-center justify-between mb-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {sale_price && sale_price < price ? (
                <>
                  <span className="text-lg font-semibold text-slate-800">
                    {sale_price.toLocaleString("fa-IR")} تومان
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {price.toLocaleString("fa-IR")} تومان
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-slate-800">
                  {price.toLocaleString("fa-IR")} تومان
                </span>
              )}
            </div>
          </div>
          <Badge>
            {in_stock && in_stock > 0
              ? `${in_stock.toLocaleString("fa-IR")} موجودی`
              : "ناموجود"}
          </Badge>
        </div>

        <AddToCartButton cart={{ product }} />
      </CardFooter>
    </Card>
  );
}
