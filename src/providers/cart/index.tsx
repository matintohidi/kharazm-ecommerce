"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { CartList } from "@/lib/services";
import { useGetCart } from "@/providers/cart/api/cart";
import { useCookies } from "react-cookie";

export interface CartItem extends CartList {}

interface CartState {
  items: CartItem[];
}

interface CartContextType {
  cart: CartState;
  isPending?: boolean;
  addToCart: (cart: CartList) => void;
  removeFromCart: (productToken: string) => void;
  updateQuantity: (productToken: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>({ items: [] });
  const [cookies] = useCookies(["token"]);

  const getCart = useGetCart({
    token: cookies.token,
  });
  const [cartInitialized, setCartInitialized] = useState(false);

  useEffect(() => {
    if (!cartInitialized && getCart.data) {
      setCart({ items: getCart.data });
      setCartInitialized(true);
    }
  }, [getCart.data, cartInitialized]);

  const addToCart = (cart: CartList) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.product?.token === cart.product?.token
      );

      if (existingItem) {
        const updatedItems = prevCart.items.map((item) =>
          item.product?.token === cart.product?.token
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );

        return { ...prevCart, items: updatedItems };
      } else {
        return {
          ...prevCart,
          items: [...prevCart.items, { ...cart, quantity: 1 }],
        };
      }
    });
  };

  const removeFromCart = (productToken: string) => {
    setCart((prevCart) => {
      // const item = prevCart.items.find(
      //   (item) => item.product?.token === productToken
      // );

      // if (item) {
      // toast({
      //   title: "محصول از سبد خرید حذف شد",
      //   description: `${item.product?.name} از سبد خرید حذف شد.`,
      // });
      // }

      return {
        ...prevCart,
        items: prevCart.items.filter(
          (item) => item.product?.token !== productToken
        ),
      };
    });
  };

  const updateQuantity = (productToken: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.product?.token === productToken ? { ...item, quantity } : item
      );
      return { ...prevCart, items: updatedItems };
    });
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isPending: getCart.isPending,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
