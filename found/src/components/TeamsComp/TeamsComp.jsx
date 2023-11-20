import TeamCard from "../TeamCard/TeamCard"
import "./TeamsComp.css"

const TeamsComp = () => {
  return (
    <div className="TeamsComp">
        <div className="container">
            <div className="Comptitle">
                <span className="headSub">AWESOME TEAM</span>
                <h1 className="head">Team</h1>
            </div>
            <div className="cards">
            <TeamCard
            img={"https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            name={"Raymond Woodward"}
            jobTitle={"Engineer & Architect"}
            desc={"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics."}
            /> 
                        <TeamCard
            img={"https://images.pexels.com/photos/11621973/pexels-photo-11621973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            name={"Teddy Motley"}
            jobTitle={"Engineer & Architect"}
            desc={"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics."}
            />
                        <TeamCard
            img={"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600"}
            name={"Cedric Davidson"}
            jobTitle={"Engineer & Architect"}
            desc={"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics."}
            />
                        <TeamCard
            img={"https://images.pexels.com/photos/3625610/pexels-photo-3625610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            name={"Edwin Snider"}
            jobTitle={"Engineer & Architect"}
            desc={"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics."}
            />
            <TeamCard
            img={"https://images.pexels.com/photos/12244373/pexels-photo-12244373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            name={"Fred Collins"}
            jobTitle={"Engineer & Architect"}
            desc={"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics."}
            />
            </div>
        </div>
    </div>
  )
}

export default TeamsComp