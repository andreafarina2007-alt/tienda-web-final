import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ padding: 20, display: "flex", gap: 20 }}>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  )
}
