export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Producto 1",
    price: 25,
    stock: 10,
    image: "https://via.placeholder.com/150",
    description: "Descripción del producto 1",
  },
  {
    id: 2,
    title: "Producto 2",
    price: 40,
    stock: 5,
    image: "https://via.placeholder.com/150",
    description: "Descripción del producto 2",
  },
  {
    id: 3,
    title: "Producto 3",
    price: 15,
    stock: 20,
    image: "https://via.placeholder.com/150",
    description: "Descripción del producto 3",
  },
];
