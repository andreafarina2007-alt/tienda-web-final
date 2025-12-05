import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CollectionsPage from "./pages/CollectionsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/producto/:id" element={<ProductPage />} />
      <Route path="/colecciones" element={<CollectionsPage />} />
      <Route path="/carrito" element={<CartPage />} />
    </Routes>
  );
}

export default App;
