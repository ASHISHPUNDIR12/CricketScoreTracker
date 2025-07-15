import { useNavigate } from "react-router-dom";
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
      <button
        onClick={() => {
          navigate("/creatematch");
        }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 border py-3 px-4 bg-red-700 text-white rounded shadow-lg shadow-red-500/50"
      >
        Create matches{" "}
      </button>
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
