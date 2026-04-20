// En /components/item/Item.jsx
import { useState } from 'react';
export function Item ({ id, nombre, precio, stock }) {
    const [cantidad, setCantidad] = useState(0);
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
const decrementar = () => {
    if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
};
const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
}
return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', margin: '10px 0' }}>
            <button onClick={decrementar}>-</button>
            <p style={{ margin: '0 10px' }}>{cantidad}</p>
            <button onClick={incrementar}>+</button>
        </div>
        <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
);
}

// En /components/item/Item.jsx
// Recibe las props usando destructuring
// export function Item ({ nombre, descripcion, precio, stock }) {
    
//     const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
//         alert(`¡Agregaste ${nombre} al chango!`);
//     };

//     return (
//         <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
//             <h3>{nombre}</h3>
//             <p>{descripcion}</p>
//             <p>Precio: $ {precio}</p>
//             <p>Stock disponible: {stock}</p>
//             {/* Cuando le boton detecta un clic (onClick), se ejecuta la función */}
//             <button onClick={CompraClick}>Comprar</button>
//         </div>
//     );
// }
