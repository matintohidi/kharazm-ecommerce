"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/services";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartContextType {
  cart: CartState;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartState>({ items: [] });
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
    setMounted(true);
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // If item already exists, increase quantity
        const updatedItems = prevCart.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        toast({
          title: "محصول به سبد خرید اضافه شد",
          description: `تعداد ${product.name} افزایش یافت.`,
        });

        return { ...prevCart, items: updatedItems };
      } else {
        // Add new item with quantity 1
        toast({
          title: "محصول به سبد خرید اضافه شد",
          description: `${product.name} به سبد خرید اضافه شد.`,
        });

        return {
          ...prevCart,
          items: [...prevCart.items, { ...product, quantity: 1 }],
        };
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const item = prevCart.items.find((item) => item.id === productId);

      if (item) {
        toast({
          title: "محصول از سبد خرید حذف شد",
          description: `${item.name} از سبد خرید حذف شد.`,
        });
      }

      return {
        ...prevCart,
        items: prevCart.items.filter((item) => item.id !== productId),
      };
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return { ...prevCart, items: updatedItems };
    });
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
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
