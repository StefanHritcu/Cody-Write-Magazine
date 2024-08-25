import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <div>
          <Link to="/chisiamo">Chi Siamo</Link>
          <Link to="/contatti">Contatti</Link>
        </div>
      </header>
    </>
  );
}
export default Header;
