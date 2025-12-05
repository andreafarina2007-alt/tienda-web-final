import { useEffect, useState } from "react"
import { fetchProducts } from "../api"
import type { Product } from "../data/products"
import { Link } from "react-router-dom"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando productos...</p>

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Productos</h1>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <img src={product.image} alt={product.title} style={{ width: "100%" }} />
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <Link to={`/producto/${product.id}`}>
              <button>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
