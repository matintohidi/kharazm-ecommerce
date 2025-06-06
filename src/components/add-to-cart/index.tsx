"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/cart";
import { ShoppingCart } from "lucide-react";
import { CartCreate, CartList } from "@/lib/services";
import { useCookies } from "react-cookie";
import { useAddToCart } from "@/components/add-to-cart/api/add-to-cart";
import { useUser } from "@/providers/user-provider";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  cart: CartList;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export function AddToCartButton({
  cart,
  variant = "default",
  size = "default",
}: AddToCartButtonProps) {
  const { addToCart, cart: cartList } = useCart();
  const { user } = useUser();
  const { toast } = useToast();
  const [cookies] = useCookies(["token"]);

  const addProductToCart = useAddToCart({
    onSuccess: (data) => {
      addToCart(data);

      toast({
        title: "محصول به سبد خرید اضافه شد",
        description: `${cart.product?.name} به سبد خرید اضافه شد.`,
      });
    },
  });

  const isOutOfStock = cartList.items.some(
    (item) =>
      item.product?.token === cart?.product?.token &&
      (item.quantity || 0) >= (cart?.product?.in_stock || 0)
  );

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "خطا",
        description:
          "برای افزودن محصول به سبد خرید باید وارد حساب کاربری خود شوید.",
        variant: "destructive",
      });

      // return;
    }

    const model: CartCreate = {
      product_token: cart.product?.token || "",
    };

    addProductToCart.add({
      model,
      token: cookies.token,
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={
        addProductToCart.isPending || !cart.product?.in_stock || isOutOfStock
      }
      variant={variant}
      size={size}
      className="flex-1/2 w-full"
    >
      <ShoppingCart className="h-4 w-4 ml-2" />
      {addProductToCart.isPending ? "در حال افزودن..." : "افزودن به سبد خرید"}
    </Button>
  );
}
