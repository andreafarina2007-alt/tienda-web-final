import { useCart } from "../context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart()

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
              <h3>{item.title}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h2>Total: ${getTotal()}</h2>
        </div>
      )}
    </div>
  )
}
