import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { Product } from "../data/products"

// Extiende Product con cantidad
export interface CartItem extends Product {
  quantity: number
}

// Tipos del contexto
interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  getTotal: () => number
}

// Creamos el contexto, inicialmente null
const CartContext = createContext<CartContextType | null>(null)

// Provider del carrito
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id)
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook para usar el carrito
export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider")
  return context
}
