import "./ScoreAndDesc.css"

const ScoreAndDesc = ({score,name}) => {
  return (
    <div className="ScoreAndDesc">
        <div className="score">
            {score}
        </div>
        <p className="text">
            {name}
        </p>
    </div>
  )
}

export default ScoreAndDesc