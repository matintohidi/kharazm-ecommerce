import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">سفارش شما با موفقیت ثبت شد</h1>
        <p className="text-muted-foreground mb-8">
          از خرید شما متشکریم. سفارش شما با موفقیت ثبت شد و در حال پردازش است. شماره سفارش شما:{" "}
          <span className="font-medium">KHW-12345</span>
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/account/orders">پیگیری سفارش</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">بازگشت به صفحه اصلی</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
