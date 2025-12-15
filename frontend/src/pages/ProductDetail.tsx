import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import type { Product } from "../types/Product"

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        width={300}
        style={{ borderRadius: "12px", marginBottom: "20px" }}
      />
      <h1>{product.name}</h1>
      <p style={{ fontSize: "20px" }}>{product.price} €</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  )
}
