import { useParams } from "react-router-dom";
import DetailedScoreCard from "../components/DetailedScoreCard";

const MatchDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <DetailedScoreCard matchId={id} />
    </div>
  );
};

export default MatchDetailPage;
