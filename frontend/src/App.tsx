import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
