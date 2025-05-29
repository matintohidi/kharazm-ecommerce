"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>
        <div className="h-40 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">سبد خرید شما خالی است</h2>
          <p className="text-muted-foreground mb-8">برای مشاهده محصولات و افزودن به سبد خرید به فروشگاه بروید</p>
          <Button asChild>
            <Link href="/products">مشاهده محصولات</Link>
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : 30000
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-background rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">محصولات</h2>
              <div className="divide-y">
                {cart.items.map((item) => (
                  <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-4">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=200"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.price.toLocaleString("fa-IR")} تومان</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-muted"
                            aria-label="کاهش تعداد"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted"
                            aria-label="افزایش تعداد"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="حذف از سبد خرید"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-left font-medium">{formatPrice(item.price * item.quantity)} تومان</div>
                  </div>
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
                <span>{shipping === 0 ? "رایگان" : `${formatPrice(shipping)} تومان`}</span>
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
  )
}
