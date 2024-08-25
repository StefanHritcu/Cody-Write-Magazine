import { Routes, Route } from "react-router-dom";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import Contatti from "./components/contatti/Contatti";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Routes>
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
