import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { Eye } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const orders = [
    {
      id: "KHW-12345",
      date: "۱۴۰۲/۰۳/۱۵",
      status: "completed",
      total: 1250000,
      items: 3,
    },
    {
      id: "KHW-12346",
      date: "۱۴۰۲/۰۲/۲۰",
      status: "processing",
      total: 850000,
      items: 2,
    },
    {
      id: "KHW-12347",
      date: "۱۴۰۲/۰۱/۰۵",
      status: "completed",
      total: 450000,
      items: 1,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">تکمیل شده</Badge>
      case "processing":
        return <Badge className="bg-blue-500">در حال پردازش</Badge>
      case "cancelled":
        return <Badge className="bg-red-500">لغو شده</Badge>
      default:
        return <Badge>نامشخص</Badge>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">سفارش‌های من</h1>

      <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  شماره سفارش
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  تاریخ
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  تعداد اقلام
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  مبلغ کل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-muted">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-muted-foreground">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(order.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.items} کالا</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{formatPrice(order.total)} تومان</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/account/orders/${order.id}`}>
                        <Eye className="h-4 w-4 ml-1" />
                        مشاهده
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
