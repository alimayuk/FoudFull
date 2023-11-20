import { Link } from "react-router-dom"
import "./TeamCard.css"

const TeamCard = ({img,name,jobTitle,desc}) => {
  return (
    <div className="TeamCard">
        <img src={img} alt="" />
        <div className="topSide">
        <h2>{name}</h2>
        <div className="title">{jobTitle}</div>
        </div>
        <div className="desc">{desc}</div>
        <Link>Learn More</Link>
    </div>
  )
}

export default TeamCard