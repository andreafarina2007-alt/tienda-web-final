import type { Product } from "./data/products"

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api"

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error("Error al obtener productos")
  return res.json()
}

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) throw new Error("Producto no encontrado")
  return res.json()
}

export const addToCartAPI = async (productId: number, quantity = 1) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  })
  if (!res.ok) throw new Error("Error al añadir al carrito")
  return res.json()
}

export const getCartAPI = async () => {
  const res = await fetch(`${BASE_URL}/cart`)
  if (!res.ok) throw new Error("Error al obtener carrito")
  return res.json()
}
