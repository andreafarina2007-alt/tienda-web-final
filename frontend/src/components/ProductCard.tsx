import { useCart } from "../context/CartContext"
import type { Product } from "../types/Product"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{product.name}</h3>
      <p>{product.price} €</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "black",
          color: "white",
          padding: "8px 15px",
          border: "none",
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
