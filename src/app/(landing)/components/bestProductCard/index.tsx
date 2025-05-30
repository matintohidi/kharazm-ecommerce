import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/services";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BestProductCardProps {
  product: Product;
}

export const BestProductCard = (props: BestProductCardProps) => {
  const { product } = props;
  const { id, image, name, price, description, category, token } = product;

  return (
    <Link href={`/products/${id}`} key={id} className="group relative">
      <div className="min-h-[525px] flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary/20">
        <div className="relative aspect-square overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
          <Image
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* {discount && discount > 0 && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                        {discount.toLocaleString("fa-IR")}٪ تخفیف
                      </div>
                    )} */}

          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
              <Star className="h-4 w-4 text-slate-800" />
            </button>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    // i < rating
                    i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 mr-2">
                {/* ({reviewCount}) */}(۰)
              </span>
            </div>

            <Badge>
              <Link href={`/products?${category?.name}`}>{category.name}</Link>
            </Badge>
          </div>

          <h2 className="font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h2>
          <h3 className="font-light text-slate-500 text-sm mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {description}
          </h3>

          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800">
                  {price.toLocaleString("fa-IR")} تومان
                </span>
                {/* {originalPrice &&
                            originalPrice > price && (
                              <span className="text-sm text-gray-400 line-through">
                                {originalPrice.toLocaleString("fa-IR")}{" "}
                                تومان
                              </span>
                            )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
