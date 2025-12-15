import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const { cart } = useCart()

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        borderBottom: "1px solid #ddd",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ fontSize: "20px", fontWeight: "bold" }}>
        🛍️ Mi Tienda
      </Link>

      <Link
        to="/cart"
        style={{
          position: "relative",
          fontSize: "22px",
          textDecoration: "none",
        }}
      >
        🛒
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "red",
              color: "white",
              padding: "2px 6px",
              borderRadius: "50%",
              fontSize: "12px",
            }}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  )
}
