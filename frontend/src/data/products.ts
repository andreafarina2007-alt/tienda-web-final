export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: 1, name: "Sudadera Blanca", price: 29.99, image: "/sudadera-blanca.png" },
  { id: 2, name: "Sudadera Negra", price: 34.99, image: "/sudadera-negra.png" },
  { id: 3, name: "Gorra", price: 14.99, image: "/gorra.png" }
]
