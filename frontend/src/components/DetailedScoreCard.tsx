import { useNavigate } from "react-router-dom";

const DetailedScoreCard = ({ matchId }: { matchId: string | undefined }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div>hii i am detailed score of matches {matchId}</div>
      <button onClick={()=>{
        navigate("/matches")
      }} >back</button>
    </div>
  );
};

export default DetailedScoreCard;
