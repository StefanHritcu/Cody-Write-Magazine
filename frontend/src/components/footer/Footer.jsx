import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import ButtonWithEffect from "./../../SPRING/animatedComponents/button/ButtonWithEffect";

function Footer() {
  const handleFacebookClick = () => {
    alert(
      "Se i profili FACEBOOK non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.facebook.com/profile.php?id=61563101911367",
      "_blank",
      "noopener noreferrer"
    );
    window.open(
      "https://www.facebook.com/profile.php?id=another-facebook-profile",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleLinkedinClick = () => {
    alert(
      "Se i profili LINKEDIN non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/",
      "_blank",
      "noopener noreferrer"
    );
    window.open(
      "https://www.linkedin.com/in/samuele-tasciotti-212b232a7/",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleGithubClick = () => {
    alert(
      "Se i profili GITHUB non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://github.com/StefanHritcu",
      "_blank",
      "noopener noreferrer"
    );
    window.open(
      "https://github.com/Samueletasciotti00",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleEmailClick = () => {
    alert(
      "Se le email non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open("mailto:stefano.94h@gmail.com", "_blank");
    window.open("mailto:another.email@example.com", "_blank");
  };

  return (
    <footer className="mt-auto py-4">
      {/* APPLICO LO STILE AL QUESTO DIV PER REGOLARLO QUANDO LA WIDTH è SUPERIORE A PX */}
      <div className="responsive-flex">
        {/* LINKS ESTERNI SOCIAL */}
        <nav
          aria-label="Social Media Links"
          className="link-esterni-responsive d-flex justify-content-around align-items-center"
        >
          <ButtonWithEffect
            onClick={handleFacebookClick}
            aria-label="Facebook Profiles"
            className="icon-size btn btn-link"
          >
            <i className="bi bi-facebook"></i>
          </ButtonWithEffect>
          <ButtonWithEffect
            onClick={handleGithubClick}
            aria-label="GitHub Profiles"
            className="icon-size btn btn-link"
          >
            <i className="bi bi-github"></i>
          </ButtonWithEffect>

          <ButtonWithEffect
            onClick={handleLinkedinClick}
            aria-label="LinkedIn Profiles"
            className="icon-size btn btn-link"
          >
            <i className="bi bi-linkedin"></i>
          </ButtonWithEffect>
          <ButtonWithEffect
            onClick={handleEmailClick}
            aria-label="Send Emails"
            className="icon-size btn btn-link"
          >
            <i className="bi bi-envelope"></i>
          </ButtonWithEffect>
        </nav>

        {/* LINKS INTERNI SITO */}
        <section
          aria-label="Site Navigation Links"
          className="d-lg-none container d-flex justify-content-around align-items-center my-4"
        >
          <div className="row">
            <div className="d-flex flex-column">
              <Link className="custom-link-footer" to="articoli">
                Articoli
              </Link>
              <Link className="custom-link-footer" to="about">
                About
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column">
              <Link className="custom-link-footer" to="categoria">
                Categoria
              </Link>
              <Link className="custom-link-footer" to="contatti">
                Contatti
              </Link>
            </div>
          </div>
        </section>

        {/* Sezione per schermi superiori ai 1000px */}
        <section className="d-none d-lg-block">
          <Link className="custom-link-footer" to="articoli">
            Articoli
          </Link>
          <Link className="custom-link-footer" to="categoria">
            Categoria
          </Link>
          <Link className="custom-link-footer" to="about">
            About
          </Link>
          <Link className="custom-link-footer" to="contatti">
            Contatti
          </Link>
        </section>
      </div>

      {/* COPYRIGHT INFORMATION */}
      <div>
        <p className="text-center mb-0">
          Copyright © All Rights Reserved <br /> Created by Stefan Hritcu &
          Samuele Tasciotti
        </p>
      </div>
    </footer>
  );
}

export default Footer;
