import photo_mobile from "../assets/photo-mobile.png";
import photo_desktop from "../assets/photo-desktop.png";
import icon_linkedin from "../assets/Icons/linkedin.svg";
import icon_instagram from "../assets/Icons/instagram.svg";
import icon_twitter from "../assets/Icons/twitter.svg";
import icon_mail from "../assets/Icons/mail.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="img-home">
        <img className="img-mobile" src={photo_mobile} />
        <img className="img-desktop" src={photo_desktop} alt="" />
      </div>
      <div className="home-content">
        <div className="title">
          <h1>
            Front-End <br /> Development
          </h1>
          <br />
          <p>
            Me especializo en React Js para el desarrollo <br /> de aplicaciones
            web fullstack completamente responsive <br /> y que se ajusten a tus
            necesidades como cliente.
          </p>
        </div>
        <div className="icon-redes">
          <a href="#">
            <img src={icon_linkedin} alt="" />
          </a>
          <a href="#">
            <img src={icon_instagram} alt="" />
          </a>
          <a href="#">
            <img src={icon_twitter} alt="" />
          </a>
        </div>
        <div className="btn-home">
          <a href="#">
            <button>
              <img src={icon_mail} alt="" /> <p>Contactame</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
