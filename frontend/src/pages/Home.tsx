import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import iplLogo from "../assets/iplLogo.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar path="" title1="home" title1Path="" title2="how to use" title2Path=""  title3="signup" title3Path="signup" createMatch="Create match" />

      <div className="sm:flex sm:justify-between sm:mt-10 sm:mx-4 lg:mx-30">
        <div className="left sm:border sm:p-8 lg:p-20 flex-1">
          <div className="animate-[fadeIn_0.8s_ease-out_forwards] mt-3 sm:mt-15 flex flex-col gap-2 text-3xl sm:text-4xl lg:text-5xl text-center font-poppins-400">
            <h1>Track your score</h1>
            <h1 className="font-extralight">Absoulute</h1>
            <h1>For Freeeeeeeee</h1>
          </div>
          <div className="text-center mt-3 text-xl font-extralight">
            Signup/signin to Create match
            <div className="text-white mt-5 flex gap-1 justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#e20001] px-9 py-2"
              >
                Signup
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="bg-[#e20001] px-10 py-2"
              >
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="right hidden sm:flex items-center justify-center flex-1">
          <img
            src={iplLogo}
            alt="logo"
            className="w-full max-w-96 h-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-7 sm:mt-15 px-4 max-w-4xl mx-auto">
        <h1 className="text-center text-2xl font-medium mb-1 sm:text-3xl lg:text-4xl">
          How to use?
        </h1>
        <div className="flex justify-center sm:text-lg lg:text-xl sm:mt-5">
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Create a Match</li>
            <li>Create Teams</li>
            <li>Add Players</li>
            <li>Start Scoring Live</li>
            <li>View Live Stats</li>
            <li>View Player Stats</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center mb-4 text-white font-extralight  ">
        <button onClick={()=>{
          navigate("/matches")
        }} className="bg-[#e20001] px-5 py-3 rounded-3xl hover:bg-red-500 ">
          View Matches
        </button>
      </div>
    
    </div>
  );
};

export default Home;
