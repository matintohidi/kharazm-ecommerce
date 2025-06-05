import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { formatPrice } from "@/lib/utils";
import { Truck, ShieldCheck, RotateCcw, Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { API_URL } from "@/configs/app.config";
import { Product } from "@/lib/services";
import { Rating } from "@/components/rating";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab } from "@/components/types/tab.type";
import ProductTabs from "@/app/products/[slug]/_components/tabs/tabs";
import ProductReviews from "@/app/products/[slug]/_components/reviews/product-reviews";

const revalidate = 3 * 60 * 60;

export async function generateStaticParams() {
  const products: Product[] = await fetch(`${API_URL}/products/`, {
    next: {
      revalidate,
    },
  }).then((res) => res.json());

  return products.map((product) => ({
    slug: product.token,
  }));
}

async function getProduct(slug: string) {
  const res = await fetch(`${API_URL}/products/${slug}/`, {
    next: {
      revalidate,
    },
  });

  return res.json();
}

async function getRelatedProducts(category: string) {
  const res = await fetch(`${API_URL}/categories/${category}/`, {
    next: {
      revalidate,
    },
  });

  return res.json();
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product: Product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const {
    category,
    in_stock,
    name,
    price,
    discount,
    extra_details,
    image,
    reviews,
    description,
    sale_price,
  } = product;

  const relatedProducts: Product[] = await getRelatedProducts(category.name);

  const tabs: Tab[] = [
    {
      label: "مشخصات محصول",
      value: "details",
      content: extra_details,
    },
    {
      label: "نظرات",
      value: "reviews",
      content: <ProductReviews reviews={reviews} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg?height=600&width=600"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              <Rating product={product} />
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviews?.length} نظر)
            </span>
          </div>

          <div className="flex flex-col text-2xl font-bold mb-6">
            {sale_price && sale_price < price ? (
              <>
                <span className="text-lg font-semibold text-slate-800">
                  {formatPrice(sale_price)} تومان
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(price)} تومان
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold text-slate-800">
                {formatPrice(price)} تومان
              </span>
            )}
          </div>

          <h2 className="text-muted-foreground mb-6">{description}</h2>

          <div className="flex gap-4 mt-auto">
            <AddToCartButton product={product} />
            <Button variant="outline">افزودن به علاقه‌مندی‌ها</Button>
          </div>

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

      <div className="mt-16">
        <ProductTabs tabs={tabs} />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.token} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
