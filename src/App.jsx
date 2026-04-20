import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Tienda de mascotas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          quisquam. Doloribus voluptate vel iure, et illo fugiat error nisi,
          accusantium, repudiandae voluptatibus doloremque ullam saepe quo
          aliquid. Qui, quas. Quibusdam?
        </p>
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