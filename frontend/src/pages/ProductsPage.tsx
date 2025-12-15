import { useEffect, useState } from "react"
import type { Product } from "../data/products"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    // aquí iría fetch real al backend
    setProducts([
      { id: 1, title: "Producto 1", price: 10, stock: 5, image: "/assets/products/producto1.jpg", description: "Desc 1" },
      { id: 2, title: "Producto 2", price: 15, stock: 3, image: "/assets/products/producto2.jpg", description: "Desc 2" },
    ])
  }, [])

  return (
    <div className="container">
      <h1>Productos</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Precio: ${p.price}</p>
            <p>Stock: {p.stock}</p>
            <button onClick={() => addToCart(p)}>Añadir al carrito</button>
            <Link to={`/producto/${p.id}`}><button>Ver más</button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}
