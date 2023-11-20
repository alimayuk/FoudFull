import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import ScoreAndDesc from "../ScoreAndDesc/ScoreAndDesc";
import {GiCommercialAirplane, GiFishingBoat} from "react-icons/gi"
import {TbTruckDelivery} from "react-icons/tb"
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>Find logistic services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Quia,
            obcaecati dolorem voluptatem ex, quos laboriosam quas veniam
            voluptatum eum incidunt.
          </p>
          <div className="search">
            <form className="heroForm">
              <input placeholder="Your ZIP code or City. e.g. New York" type="text" />
              <button>Search</button>
            </form>
          </div>
          <div className="stats">
            <ScoreAndDesc score={"2,917"} name={"# of Companies"} />
            <ScoreAndDesc score={"3,918"} name={"# of Roag Freight"} />
            <ScoreAndDesc score={"38,928"} name={"# of Air Freight"} />
            <ScoreAndDesc score={"7,192"} name={"# of Sea Freight"} />
          </div>
          <div className="features">
            <div className="cards">
            <ReadMoreCard
            icon={<GiCommercialAirplane/>}
            htext={"Air Freight"}
            desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            />
             <ReadMoreCard
            icon={<GiFishingBoat/>}
            htext={"Sea Freight"}
            desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            />
             <ReadMoreCard
            icon={<TbTruckDelivery/>}
            htext={"Land Freight"}
            desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
