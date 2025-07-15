import { useNavigate } from "react-router-dom";

  const CreateMatch = () => {
    const navigate = useNavigate()
    return (
      <div className="min-h-screen bg-white px-4 py-4 text-sm sm:text-base">
        <h1 className="text-center text-2xl font-semibold text-red-700 mb-6">
          Create Match
        </h1>

        {/* Team Display */}
        <div className="flex justify-around items-center mb-6">
          <span className="bg-red-600 text-white px-10 py-8 text-xl rounded-full shadow-md">
            T
          </span>
          <span className="text-xl font-semibold">vs</span>
          <span className="bg-green-600 text-white px-10 py-8 text-xl rounded-full shadow-md">
            T
          </span>
        </div>

        <form className="space-y-6">
          {/* Team Names */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <input
              className="flex-1 border-b-2 text-center py-1 font-light outline-none"
              type="text"
              placeholder="Team 1 Name"
            />
            <input
              className="flex-1 border-b-2 text-center py-1 font-light outline-none"
              type="text"
              placeholder="Team 2 Name"
            />
          </div>

          {/* Match Details */}
          <div className="border rounded-xl p-5 space-y-5 shadow-sm">
            {/* Overs */}
            <div className="flex items-center gap-4">
              <label className="w-24">Overs</label>
              <input
                className="w-16 border text-center rounded border-slate-400 py-1"
                type="number"
                placeholder="20"
              />
            </div>

            {/* Ground */}
            <div className="flex items-center gap-4">
              <label className="w-24">Ground</label>
              <input
                className="flex-1 border text-center rounded border-slate-400 py-1"
                type="text"
                placeholder="Enter Ground Name"
              />
            </div>

            {/* Ball Type */}
            <div className="flex items-center gap-4">
              <label className="w-24">Ball Type</label>
              <select
                name="ballType"
                className="flex-1 bg-[#ffebeb] text-[#b71c1c] border border-[#e53935] rounded px-3 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e53935]"
              >
                <option>Choose</option>
                <option value="tennis">Tennis</option>
                <option value="flash">Flash</option>
                <option value="leather">Leather</option>
              </select>
            </div>

            {/* Player Count */}
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm">Players Per Team</label>
              <input
                className="w-16 border text-center rounded border-slate-400 py-1"
                type="number"
                placeholder="11"
              />
            </div>

            {/* Confirm Button */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => alert("Confirm")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
              >
                Confirm
              </button>
            </div>
          </div>

          {/* Add Player Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                navigate("/addplayers")
              }}
              className="bg-red-700 hover:bg-red-800 text-white  w-full py-3 rounded-xl shadow"
            >
              Add Players Name
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default CreateMatch;
