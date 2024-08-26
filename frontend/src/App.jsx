import { Routes, Route } from "react-router-dom";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import Contatti from "./components/contatti/Contatti";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HelmetProvider>
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>

        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
