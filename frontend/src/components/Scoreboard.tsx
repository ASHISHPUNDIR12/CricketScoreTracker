import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import Team1Score from "./Team1Score";
import Team2Score from "./Team2Score";
const Scoreboard = () => {
  const [team2Clicked, setTeam2Clicked] = useState<Boolean>(false);
  const [team1Clicked, setTeam1Clicked] = useState<Boolean>(false);
  return (
    <div className="">
      <div className="" >
        {/* team1  */}
        <div
          onClick={() => {
            setTeam2Clicked(false)
            setTeam1Clicked(!team1Clicked);

          }}
          className="team1"
        >
          <div className="bg-red-200 flex justify-between px-2 py-2">
            <h1 className="font-bold">CSK</h1>
            <div className="flex">
              <h1 className="text-[14px] pt-0.5 ">206-4(20 ovs)</h1>
              <SlArrowDown className=" ml-3 mt-1" />
            </div>
          </div>
        </div>
        {/* conditional rendering team 1 scores  */}
        <div>
          {team1Clicked && <Team1Score />}
          <div className="team2"></div>
        </div>
        {/* team 2  */}
        <div
          onClick={() => {
            setTeam1Clicked(false)
            setTeam2Clicked(!team2Clicked);
          }}
          className="team1"
        >
          <div className="bg-red-200 flex justify-between px-1">
            <h1 className="font-bold">MI</h1>
            <div className="flex">
              <h1 className="text-[14px] pt-0.5 ">207-4(20 ovs)</h1>
              <SlArrowDown className=" ml-3 mt-1" />
            </div>
          </div>
        </div>

        {/* team 2 scores  */}

        <div>
          {team2Clicked && <Team2Score />}
          <div className="team2"></div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
