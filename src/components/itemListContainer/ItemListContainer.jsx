// En /componentes/ItemListContainer/ItemListContainer.jsx
import { ItemList } from "./itemList/Itemlist";
export function ItemListContainer ({ Mensaje }) {
const productos = [
{ id: '1234', nombre: 'Notebook Pro', descripcion: 'Una laptop potente', precio: 12000, stock: 15 },
{ id: '2344', nombre: 'Monitor Curvo', descripcion: 'Un monitor curvo de 27 pulgadas', precio: 450000, stock: 25 },
{ id: '3545', nombre: 'Teclado Mecánico', descripcion: 'Teclado mecánico RGB', precio: 15000, stock: 50 },];
return (
    <div>
        <h2>{Mensaje}</h2>
        <div>
            <ItemList productos={productos} />
        </div>
    </div>
);
}