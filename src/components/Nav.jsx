import { useState } from "react";

const Nav = () => {
  const [burger_class, setBurger_class] = useState("burger-bar unclicked");
  const [menu_class, setMenu_class] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurger_class("burger-bar clicked");
      setMenu_class("menu visible");
    } else {
      setBurger_class("burger-bar unclicked");
      setMenu_class("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="nav" style={{ width: "100%" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className="menu-link-desktop">
            <a href="#">Home</a>
            <a href="#">Acerca de mí</a>
            <a href="#">Mis habilidades</a>
            <a href="#">Experiencia</a>
            <a href="#">Portafolio</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="menu-link-mobile">
          <a href="#">Home</a>
          <a href="#">Acerca de mí</a>
          <a href="#">Mis habilidades</a>
          <a href="#">Experiencia</a>
          <a href="#">Portafolio</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
