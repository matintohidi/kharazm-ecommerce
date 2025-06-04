import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Api } from "@/lib/api";
import { Product } from "@/lib/services";
import { Search, SlidersHorizontal } from "lucide-react";

async function getProducts() {
  const res = await Api.products.productsList({
    next: {
      revalidate: 3 * 60 * 60,
    },
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">محصولات</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="جستجو در محصولات..." className="pr-10" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">جدیدترین</SelectItem>
              <SelectItem value="price-asc">قیمت: کم به زیاد</SelectItem>
              <SelectItem value="price-desc">قیمت: زیاد به کم</SelectItem>
              <SelectItem value="popular">محبوب‌ترین</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">فیلترها</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .map((product) => (
            <ProductCard key={product.token} product={product} />
          ))
          .slice(0, 4)}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline">مشاهده بیشتر</Button>
        </div>
      </div>
    </div>
  );
}
