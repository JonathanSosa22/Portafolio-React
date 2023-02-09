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
            Product <br /> Designer
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Dolores, accusantium! Temporibus velit cum a reprehenderit.
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
