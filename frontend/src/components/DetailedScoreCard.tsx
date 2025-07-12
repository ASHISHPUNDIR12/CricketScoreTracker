import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "./Info";
import Commentry from "./Commentry";
import Scoreboard from "./Scoreboard";

const DetailedScoreCard = ({ matchId }: { matchId: string | undefined }) => {
  const [currentState, setCurrentState] = useState<String>("info");
  return (
    <div>
      <div className="border mx-3 mt-5  ">
        <div className="flex justify-between bg-gradient-to-r from-[#e53935] to-[#b71c1c] text-white p-4  shadow-md m-auto mt-3  border w-[70%] py-2 px-5  ">
          <h1>Team1</h1>
          <p>vs</p>
          <h1>Team 2</h1>
        </div>
        <div className="flex  justify-center mb-2  ">
          <ul className="flex   text-sm  mt-4   ">
            <li className="  ">
              <button
                onClick={() => {
                  setCurrentState("info");
                }}
                className=" px-4 py-2 border "
              >
                Info
              </button>
            </li>
            <li className="">
              <button
                onClick={() => {
                  setCurrentState("commentry");
                }}
                className="   border border-black  px-4 py-2    "
              >
                commentry
              </button>
            </li>
            <li className="">
              <button
                onClick={() => {
                  setCurrentState("scoreboard");
                }}
                className=" px-4 py-2 border "
              >
                scorecard
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center border mx-3 mb-3  ">
          {currentState === "info" && <Info />}
          {currentState === "commentry" && <Commentry />}
          {currentState === "scoreboard" && <Scoreboard />}
        </div>
      </div>
    </div>
  );
};

export default DetailedScoreCard;
