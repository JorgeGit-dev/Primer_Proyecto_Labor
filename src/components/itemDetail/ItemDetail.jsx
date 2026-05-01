// src/ components/ itemDetail/ ItemDetail.jsx

import { Item } from "../item/Item";

export const ItemDetail = ({ item }) => {
  return (
    <Item {...item}>
      <button className="btn primary">Agregar al carrito</button>
    </Item>
  );
};