"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/cart";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import CartCard from "@/app/cart/_components/cart-card";
import { Trash2 } from "lucide-react";
import { useClearCart } from "@/app/cart/_api/cart";
import { useCookies } from "react-cookie";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const { cart, isPending, removeFromCart } = useCart();
  const { toast } = useToast();
  const [cookies] = useCookies(["token"]);

  const clearCart = useClearCart({
    onSuccess: () => {
      cart.items.forEach((item) => {
        removeFromCart(item.product?.token || "");

        toast({
          title: "محصول از سبد خرید حذف شد",
          description: `${item.product?.name} از سبد خرید حذف شد.`,
        });
      });
    },
  });

  const handleClearCart = () => {
    clearCart.clear({
      token: cookies.token,
    });
  };

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">سبد خرید شما خالی است</h2>
          <p className="text-muted-foreground mb-8">
            برای مشاهده محصولات و افزودن به سبد خرید به فروشگاه بروید
          </p>
          <Button asChild>
            <Link href="/products">مشاهده محصولات</Link>
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = cart.items.reduce(
    (total, item) =>
      total + (item.product?.sale_price || 0) * (item.quantity || 0),
    0
  );
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">سبد خرید</h1>

        <button
          className="text-red-500 border-2 border-red-200 hover:bg-red-50 flex items-center justify-center rounded-sm transition p-2"
          aria-label="حذف از سبد خرید"
          onClick={handleClearCart}
        >
          <Trash2 className="h-4 w-4" />
          <span className="mr-2 text-xs	font-light">حذف همه اقلام</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-background rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">محصولات</h2>
              <div className="divide-y">
                {cart.items.map((item) => (
                  <CartCard
                    key={item.product?.token || "" + item.product?.category}
                    cart={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-background rounded-lg border shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">جمع سبد خرید</span>
                <span>{formatPrice(subtotal)} تومان</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">هزینه ارسال</span>
                <span>
                  {shipping === 0 ? "رایگان" : `${formatPrice(shipping)} تومان`}
                </span>
              </div>
              <div className="border-t pt-4 flex justify-between font-medium">
                <span>مجموع</span>
                <span>{formatPrice(total)} تومان</span>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">ادامه فرآیند خرید</Link>
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <p>با ثبت سفارش، شرایط و قوانین فروشگاه را می‌پذیرید</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
