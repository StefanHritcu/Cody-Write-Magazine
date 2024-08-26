import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleFacebookClick = () => {
    alert(
      "Se i profili FACEBOOK non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.facebook.com/profile.php?id=61563101911367",
      "_blank"
    );
    window.open(
      "https://www.facebook.com/profile.php?id=61563101911367",
      "_blank"
    );
  };

  const handleLinkedinClick = () => {
    alert(
      "Se i profili LINKEDIN non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/",
      "_blank"
    );
    window.open(
      "https://www.linkedin.com/in/samuele-tasciotti-212b232a7/",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    alert(
      "Se i profili GITHUB non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open("https://github.com/StefanHritcu", "_blank");
    window.open("https://github.com/Samueletasciotti00", "_blank");
  };

  const handleEmailClick = () => {
    alert(
      "Se i profili GITHUB non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open("mailto:stefano.94h@gmail.com", "_blank");
    window.open("mailto:stefano.94h@gmail.com", "_blank");
  };

  return (
    <>
      <footer className="mt-auto py-4">
        {/* LINKS ESTERNI SOCIAL */}
        <nav className="d-flex justify-content-around align-items-center">
          <a
            onClick={handleFacebookClick}
            aria-label="Facebook"
            role="button"
            title="Facebook"
            className="icon-size"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            onClick={handleLinkedinClick}
            aria-label="Linkedin"
            role="button"
            title="Linkedin"
            className="icon-size"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            onClick={handleGithubClick}
            aria-label="Github"
            role="button"
            title="Github"
            className="icon-size"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            onClick={handleEmailClick}
            aria-label="Github"
            role="button"
            title="Github"
            className="icon-size"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </nav>
        {/* LINKS INTERNI SITO */}
        <main className="container d-flex justify-content-around align-items-center my-4">
          <div className="row">
            <div className="d-flex flex-column">
              <Link>Articoli</Link>
              <Link>Categorie</Link>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column">
              <Link>Articoli</Link>
              <Link>Categorie</Link>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
}
export default Footer;
