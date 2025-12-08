import express from "express"
import cors from "cors"
iimport express from "express"
import cors from "cors"
import type { Product } from "./data/products"
import { products } from "./data/products"


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

// Endpoints
app.get("/api/products", (req, res) => res.json(products))
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id)
  const product = products.find((p) => p.id === id)
  if (!product) return res.status(404).json({ message: "Producto no encontrado" })
  res.json(product)
})

// Carrito temporal
let cart: { productId: number; quantity: number }[] = []

app.post("/api/cart", (req, res) => {
  const { productId, quantity } = req.body
  const exist = cart.find((item) => item.productId === productId)
  if (exist) exist.quantity += quantity
  else cart.push({ productId, quantity })
  res.json(cart)
})

app.get("/api/cart", (req, res) => res.json(cart))

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente")
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
