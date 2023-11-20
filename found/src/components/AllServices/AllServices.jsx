import ReadMoreCard from "../ReadMoreCard/ReadMoreCard"
import "./AllServices.css"
import {GiCommercialAirplane, GiFishingBoat} from "react-icons/gi"
import {GoVerified} from "react-icons/go"
import {BiSolidPackage} from "react-icons/bi"
import {TbTruckDelivery} from "react-icons/tb"
const AllServices = () => {
  return (
    <div className="AllServices">
       <div className="container">
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
            <ReadMoreCard
            icon={<BiSolidPackage/>}
            htext={"Package Delivery"}
            desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            />
             <ReadMoreCard
            icon={<GoVerified/>}
            htext={"Tracking"}
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
  )
}

export default AllServices