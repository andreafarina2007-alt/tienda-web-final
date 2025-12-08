import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/api";
import type { Product } from "../data/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {products.length === 0 && <p>No hay productos disponibles.</p>}

        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.price} €</p>
            <Link to={`/product/${p.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
