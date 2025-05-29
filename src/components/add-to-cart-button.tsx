"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  image?: string
}

interface AddToCartButtonProps {
  product: Product
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

export function AddToCartButton({ product, variant = "default", size = "default" }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addToCart(product)
      setIsAdding(false)
    }, 300)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} variant={variant} size={size} className="flex-1">
      <ShoppingCart className="h-4 w-4 ml-2" />
      {isAdding ? "در حال افزودن..." : "افزودن به سبد خرید"}
    </Button>
  )
}
