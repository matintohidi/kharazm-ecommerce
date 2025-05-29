"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, Landmark, Wallet } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold mb-8">تکمیل خرید</h1>
        <div className="h-40 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    router.push("/cart")
    return null
  }

  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : 30000
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "سفارش با موفقیت ثبت شد",
      description: "سفارش شما با موفقیت ثبت شد و در حال پردازش است.",
    })

    clearCart()
    router.push("/checkout/success")
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">تکمیل خرید</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="bg-background rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">اطلاعات ارسال</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">نام</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>
                  <Input id="lastName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره موبایل</Label>
                  <Input id="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">آدرس</Label>
                  <Textarea id="address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">شهر</Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">کد پستی</Label>
                  <Input id="postalCode" required />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-background rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">روش پرداخت</h2>
              <RadioGroup defaultValue="online">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    پرداخت آنلاین
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse mt-4">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Label htmlFor="wallet" className="flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    کیف پول
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse mt-4">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center gap-2">
                    <Landmark className="h-4 w-4" />
                    کارت به کارت
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg border shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>

              <div className="max-h-80 overflow-y-auto mb-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-3 border-b last:border-0">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg?height=100&width=100"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">تعداد: {item.quantity}</p>
                    </div>
                    <div className="text-left font-medium text-sm">{formatPrice(item.price * item.quantity)} تومان</div>
                  </div>
                ))}
              </div>

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
                <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "در حال پردازش..." : "پرداخت و ثبت سفارش"}
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>با ثبت سفارش، شرایط و قوانین فروشگاه را می‌پذیرید</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
