import { useCart } from "../context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart()

  return (
    <div className="container">
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h2>Total: ${getTotal()}</h2>
        </div>
      )}
    </div>
  )
}
