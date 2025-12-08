import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById, addToCartAPI } from "../api/api";
console.log("API LOADED:", api);
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(productId)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  const handleAddToCart = () => {
    addToCart(product);
    // También enviamos al backend
    addToCartAPI(product.id);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price} €</p>
      <p>{product.description}</p>

      <button onClick={handleAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
}
