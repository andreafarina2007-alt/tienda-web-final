import { useCart } from "../context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart()

  return (
    <div>
      <h1>Carrito</h1>

      {cart.length === 0 && <p>Tu carrito está vacío</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.name}</h3>
          <p>{item.price}€ × {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}

      <h2>Total: {getTotal().toFixed(2)}€</h2>
    </div>
  )
}
