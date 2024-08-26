import { Link } from "react-router-dom";

function Header() {
  return (
    <>

    {/* Div Contenitore di Bootstrap (Fluid prende in automatico la larghezza dello schermo). */}
    <div className="container-fluid">

      {/* E' la riga della pagina dove si possono inserire più COL */}
      <div className="row">

        {/* Col è la colonna dove vi è l'elemento interno */}
        <div className="col">

          {/* Con le varie classi vado a dare sia (Display: flex /// sia  Justify-comtent: space-around) */}
          <header className="header d-flex justify-content-around">
            <h1>Logo</h1>
              <div>
                <Link to="/chisiamo">Chi Siamo</Link>
                <Link to="/contatti">Contatti</Link>
              </div>
          </header>
        </div>
      </div>
    </div>
      
    </>
  );
}
export default Header;
