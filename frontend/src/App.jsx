import { Routes, Route } from "react-router-dom";
import Contatti from "./components/contatti/Contatti";
import About from "./components/about/About";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/footer/Footer";
import Articoli from "./components/articoli/Articoli";
import Categoria from "./components/categoria/Categoria";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HelmetProvider>
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/about" element={<About />} />
            <Route path="/articoli" element={<Articoli />} />
            <Route path="/categoria" element={<Categoria />} />
          </Routes>
        </main>

        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
