import { formatPrice } from "@/lib/utils";
import { CartItem, useCart } from "@/providers/cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCookies } from "react-cookie";

interface CartCardProps {
  cart: CartItem;
}

type UpdateQuantityType = "increase" | "decrease";

const CartCard = ({ cart }: CartCardProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [cookies] = useCookies(["token"]);

  const { product, quantity } = cart;

  const updateQuantityHandler = (type: UpdateQuantityType) => {
    if (!product?.token) return;

    const newQuantity =
      type === "increase"
        ? (quantity || 0) + 1
        : Math.max(0, (quantity || 0) - 1);

    if (newQuantity === 0) {
      removeFromCart(product.token);
    } else {
      updateQuantity(product.token, newQuantity);
    }
  };

  return (
    <div className="py-6 flex flex-col sm:flex-row gap-4">
      <div className="relative h-24 w-24 rounded-md overflow-hidden bg-muted">
        <Image
          src={product?.image || "/placeholder.svg?height=200&width=200"}
          alt={product?.name || ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{product?.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {(product?.sale_price || 0).toLocaleString("fa-IR")} تومان
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md gap-4">
            <button
              onClick={() => updateQuantityHandler("decrease")}
              className="hover:bg-muted p-2 transition"
              aria-label="کاهش تعداد"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[28px] h-6 flex items-center justify-center text-center text-sm leading-none px-2 py-1">
              {quantity?.toLocaleString("fa-IR")}
            </span>
            <button
              onClick={() => updateQuantityHandler("increase")}
              className="hover:bg-muted p-2 transition"
              aria-label="افزایش تعداد"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            className="text-red-500 border-2 border-red-200 hover:bg-red-50 w-8 h-8 flex items-center justify-center rounded-sm transition"
            aria-label="حذف از سبد خرید"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-left font-medium">
        {formatPrice((product?.sale_price || 0) * (quantity || 0))} تومان
      </div>
    </div>
  );
};

export default CartCard;
