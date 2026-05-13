// src/ components/ itemListContainer/ ItemListContainer.jsx

import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

    //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  console.log(productos);

  if (loading) return <p>Cargando...</p>;

  return (
    <section className="item-list-container">
      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button>

      <ItemList lista={productos} />
    </section>

  );
};