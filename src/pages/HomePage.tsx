import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Inicio</h1>
      <nav>
        <Link to="/productos">Productos</Link> | 
        <Link to="/colecciones">Colecciones</Link> | 
        <Link to="/carrito">Carrito</Link>
      </nav>
    </div>
  );
}
