import Navbar from "../components/Navbar"
import ScoreCard from "../components/ScoreCard"

const Matches = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
           <ScoreCard/> 
           <ScoreCard/> 
           <ScoreCard/> 
           <ScoreCard/> 
           <ScoreCard/> 
           <ScoreCard/> 
        </div>
    </div>
  )
}

export default Matches