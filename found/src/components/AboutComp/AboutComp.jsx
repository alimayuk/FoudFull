import { GiCommercialAirplane, GiFishingBoat } from "react-icons/gi";
import "./AboutComp.css";

const AboutComp = () => {
  return (
    <div className="AboutComp">
      <div className="container">
        <div className="content">
          <div className="head">
            <p className="headP">MISSION</p>
            <h1>About Us</h1>
          </div>
          <p className="desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="features">
            <div className="row">
            <GiFishingBoat className="icon"/>
                <div className="rowContent">
                    <h3>Air Freight</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="row">
            <GiCommercialAirplane className="icon"/>
                <div className="rowContent">
                    <h3>Sea Freight</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
          </div>
        </div>
        <img className="img"
          src="https://preview.colorlib.com/theme/foundation2/images/hero_bg_1.jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutComp;
