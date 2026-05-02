// src/ components/ itemList/ ItemList.jsx

import { Link } from "react-router-dom";
import { Item } from "../item/Item";
import "./ItemList.css";

export const ItemList = ({ productos }) => {
  if (!productos.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {productos.map((producto) => (
        <Link to={`/producto/${producto.id}`} key={producto.id}>
          <Item {...producto} />
        </Link>
      ))}
    </div>
  );
};