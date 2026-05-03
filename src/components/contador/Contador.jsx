// En components/contador/Contador.jsx
// Importamos 'useState' desde React.
import { useState } from "react";
import "./Contador.css";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar
  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="count-container">
      <button
        className="btn primary"
        onClick={decrement}
        disabled={contador === 0}
      >
        -
      </button>

      <p>Seleccion: {contador}</p>

      <button className="btn primary" onClick={increment}>
        +
      </button>
    </div>
  );
};
