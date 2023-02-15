import img_1 from "../assets/img/ejemplo 1.png";
import img_2 from "../assets/img/ejemplo 2.png";
import img_3 from "../assets/img/ejemplo 3.png";
import img_4 from "../assets/img/ejemplo 4.png";

const Briefcase = () => {
  return (
    <div className="briefcase" id="briefcase">
      <h1>Portafolio</h1>
      <div className="briefcase-container">
        <img src={img_1} alt="" />
        <img src={img_2} alt="" />
        <img src={img_3} alt="" />
        <img src={img_4} alt="" />
      </div>
    </div>
  );
};

export default Briefcase;
