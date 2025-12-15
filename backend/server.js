// backend/server.js
import express from "express";
import cors from "cors";
import productsData from "./data/products.js"; // Tu JSON o array de productos

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Backend funcionando ✅");
});

// Endpoint de productos
app.get("/api/products", (req, res) => {
  res.json(productsData);
});

// Endpoint de producto individual
app.get("/api/products/:id", (req, res) => {
  const product = productsData.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(product);
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));
