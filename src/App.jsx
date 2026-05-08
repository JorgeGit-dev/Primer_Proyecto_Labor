// src/ App.jsx

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contador } from "./components/contador/Contador";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> 
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
