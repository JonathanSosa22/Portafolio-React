import icon_html from "../assets/Icons/html5.svg";
import icon_css from "../assets/Icons/css3.svg";
import icon_js from "../assets/Icons/js.svg";
import icon_boostrap from "../assets/Icons/bootstrap.svg";
import icon_react from "../assets/Icons/react.svg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div>
        <h1>Mis habilidades</h1>
      </div>
      <div className="skill-box">
        <div className="content-box">
          <img src={icon_html} alt="" />
          <h2>HTML</h2>
          <p>
            Basto conocimiento de como estructurar y desplegar tu sitio para que
            sea visible en la web..
          </p>
        </div>
        <div className="content-box">
          <img src={icon_css} alt="" />
          <h2>CSS</h2>
          <p>
            Experiencia en estilar los componentes para tu sitio web, con
            increibles diseños completamente responsive y llenos de funciones.
          </p>
        </div>
        <div className="content-box">
          <img src={icon_js} alt="" />
          <h2>JAVASCRIPT</h2>
          <p>
            Basto conocimiento en lo que es basicamente el motor de un sitio
            funcional para asi cubrir las necesidades de cada cliente.
          </p>
        </div>
        <div className="content-box">
          <img src={icon_boostrap} alt="" />
          <h2>BOOTSTRAP</h2>
          <p>
            Libreria para aplicar estilos que mas utilizo para facilitar
            animaciones y elementos complejos para asi poder llevar a cabo tu
            proyecto en la brevedad posible. Estoy Disponible Como Freelancer !!
          </p>
        </div>
        <div className="content-box">
          <img src={icon_react} alt="" />
          <h2>REACT JS</h2>
          <p>
            Libreria en la que me especializo para maquetar estilar y agregar
            funcionalidades a tu sitio y asi poder ofrecerte la mejor calidad de
            proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
