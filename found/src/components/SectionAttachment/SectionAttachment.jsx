import { Link } from "react-router-dom";
import "./SectionAttachment.css";

const SectionAttachment = ({ htext, desc, bgImg }) => {
  return (
    <div className="SectionAttachment" style={{backgroundImage: `url("${bgImg}")`}}>
      <div className="wrapper" >
      <h1>{htext}</h1>
      <p>{desc}</p>
      <Link className="customBlueBtn">Get Started</Link>
      </div>
    </div>
  );
};

export default SectionAttachment;
