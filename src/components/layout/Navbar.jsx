import "../../styles/navbar.css";

export default function Navbar() {
  const scrollTo = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      const offset = selector === ".appearance" ? 0 : 200;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <span className="nav-item" onClick={() => scrollTo(".hero")}>
        Kezdőlap
      </span>
      <span className="nav-item" onClick={() => scrollTo(".comfort")}>
        Kényelem
      </span>
      <span className="nav-item" onClick={() => scrollTo(".sound")}>
        Hangzás
      </span>
      <span className="nav-item" onClick={() => scrollTo(".durability")}>
        Tartósság
      </span>
      <span className="nav-item" onClick={() => scrollTo(".appearance")}>
        Kinézet
      </span>
    </nav>
  );
}
