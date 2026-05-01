// scr/ App.jsx

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Count } from "./components/contador/Contador";
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

// /src/App.jsx
// import './App.css';
// import { Layout } from './components/layout/Layout';
// import { ItemListContainer } from
// './components/itemListContainer/ItemListContainer';

// function App() {
  // return (
    // <Layout>
      // {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
      // <h1>¡Bienvenidos a mi página!</h1>
      // <p>Este es el contenido principal.</p>
      // <ItemListContainer Mensaje="Nuestros productos destacados" />
    // </Layout>
  // );
// }
// export default App;