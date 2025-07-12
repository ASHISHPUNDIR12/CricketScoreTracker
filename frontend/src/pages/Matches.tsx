import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";

const Matches = () => {
  return (
    <div>
      <div>
        <Navbar
          path="matches"
          title1="home"
          title1Path="matches"
          title2="stats"
          title2Path="matches"
          title3="Register"
          title3Path="signup"
        />
      </div>
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

export default Matches;
