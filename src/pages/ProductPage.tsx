import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductById, addToCartAPI } from "../api"
import { useCart } from "../context/CartContext"
import type { Product } from "../data/products"

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetchProductById(Number(id))
      .then((data) => setProduct(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (!product) return <p>Producto no encontrado</p>

  const handleAddToCart = () => {
    addToCart(product)       // agrega al carrito local
    addToCartAPI(product.id) // agrega al carrito backend
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "300px" }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  )
}
