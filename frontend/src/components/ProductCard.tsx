import { useCart } from "../context/CartContext"
import type { Product } from "../data/products"

export default function ProductCard({ id, name, price, image }: Product) {
  const { addToCart } = useCart()

  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <img src={image} width={150} />
      <h3>{name}</h3>
      <p>{price} €</p>
      <button onClick={() => addToCart({ id, name, price, image })}>
        Añadir al carrito
      </button>
    </div>
  )
}
