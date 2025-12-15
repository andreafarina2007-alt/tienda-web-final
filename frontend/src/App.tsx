import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"

export default function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee", display: "flex", gap: "1rem" }}>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/producto/:id" element={<ProductPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </div>
  )
}
