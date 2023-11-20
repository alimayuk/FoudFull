import { Link } from "react-router-dom"
import{BsFillArrowRightSquareFill} from "react-icons/bs"
import "./ReadMoreCard.css"

const ReadMoreCard = ({icon,htext,desc}) => {
  return (
    <div className="ReadMoreCard">
        <div className="icon">{icon}</div>
        <div className="textSide">
            <p className="hText">{htext}</p>
            <p className="desc">{desc}</p>
            <Link className="moreBtn">Read More <BsFillArrowRightSquareFill/></Link>
        </div>
    </div>
  )
}

export default ReadMoreCard