// En /components/itemList/ItemList.jsx
import { Item } from "./item/Item";
export function ItemList ({ productos }) {
return (
    <div style={{ display: 'flex', gap: '20px' }}>
        {(productos.length === 0) ? <p>No hay productos disponibles</p> :
            productos.map(prod => (
                <Item key={prod.id} {...prod} />
        ))}
    </div>
);
}