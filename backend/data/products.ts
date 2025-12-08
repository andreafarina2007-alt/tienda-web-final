export interface Product {
  id: number
  title: string
  price: number
  stock: number
  description: string
  image: string
}

export const products: Product[] = [
  { id: 1, title: "Producto 1", price: 25, stock: 10, image: "http://localhost:5174/assets/products/producto1.jpg", description: "Descripción 1" },
  { id: 2, title: "Producto 2", price: 40, stock: 5, image: "http://localhost:5174/assets/products/producto2.jpg", description: "Descripción 2" },
  { id: 3, title: "Producto 3", price: 15, stock: 20, image: "http://localhost:5174/assets/products/producto3.jpg", description: "Descripción 3" }
]

