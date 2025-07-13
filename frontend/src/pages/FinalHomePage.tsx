import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";

const FinalHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        path="finalhome"
        title1="Home"
        title1Path="finalhome"
        title2="view matches"
        title2Path="matches"
        title3="Stats"
      />
      <button onClick={()=>{
          navigate("/creatematch")
      }} className="border py-3 px-4 bg-red-700 text-white rounded  bottom-8 shadow-lg shadow-red-500/50  left-28 fixed">Create matches </button>
      <div>
        <ScoreCard id="1" />
        <ScoreCard id="2" />
        <ScoreCard id="3" />
        <ScoreCard id="4" />
        <ScoreCard id="5" />
      </div>
    </div>
  );
};

export default FinalHomePage;
