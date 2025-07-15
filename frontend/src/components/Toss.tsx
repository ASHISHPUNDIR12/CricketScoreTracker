import { useState } from "react";

const Toss = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-6">
        <h1 className="text-center text-2xl font-bold text-red-700">Who won the toss?</h1>

        <div className="flex justify-around">
          <button
            onClick={() => setSelected("Team 1 chose")}
            className="w-24 h-24 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
          >
            Team 1
          </button>
          <button
            onClick={() => setSelected("Team 2 chose")}
            className="w-24 h-24 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
          >
            Team 2
          </button>
        </div>

        {selected && (
          <>
            <div className="text-center text-red-800 font-medium">{selected}</div>

            {/* Animated Section */}
            <div className="animate-fade-in transition-opacity duration-700 opacity-100">
              <h2 className="text-center text-lg font-semibold text-red-700 mt-4">Choose to</h2>
              <div className="flex justify-around mt-2">
                <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center rounded-lg shadow">
                  Batting
                </div>
                <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center rounded-lg shadow">
                  Bowling
                </div>
              </div>

              <h2 className="text-center text-lg font-semibold text-red-700 mt-4">Select Players</h2>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <div className="w-28 h-16 bg-red-400 text-white flex items-center justify-center rounded shadow">
                  Batsman
                </div>
                <div className="w-28 h-16 bg-red-400 text-white flex items-center justify-center rounded shadow">
                  Non-striker
                </div>
                <div className="w-28 h-16 bg-red-400 text-white flex items-center justify-center rounded shadow">
                  Bowler
                </div>
              </div>

              <div className="text-center">
                <button className="mt-6 bg-red-700 text-white px-6 py-2 rounded-lg shadow hover:bg-red-800 transition">
                  Start Scoring
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Toss;
