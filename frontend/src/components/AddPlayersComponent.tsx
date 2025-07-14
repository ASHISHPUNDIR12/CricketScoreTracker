const AddPlayersComponent = () => {
  return (
    <div>
      <h1 className="text-center bg-red-600 text-white  text-2xl pt-4 pb-3 font-bold ">
        Add Players
      </h1>
      <div>
        <div className="team1 border text-center   ">
          <h1 className="py-3">Team 1</h1>
          <div className="flex flex-col items-center gap-2  ">
            <input
              className="text-center border rounded  outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 1"
            />
            <input
              className="text-center border rounded  outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 2"
            />
            <input
              className="text-center border rounded  outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 3"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 4"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 5"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 6"
            />
          </div>
          <button className="py-1 px-4 text-white bg-green-500 rounded-2xl outline-none  border my-3">
            confirm
          </button>
        </div>
        <div className="team1 border text-center   ">
          <h1 className="py-3">Team 2</h1>
          <div className="flex flex-col items-center gap-2  ">
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 1"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 2"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 3"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 4"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 5"
            />
            <input
              className="text-center border rounded outline-red-600 border-slate-400 p-1"
              type="text"
              placeholder="player 6"
            />
          </div>
          <button className="py-1 text-white px-4 bg-green-500 rounded-2xl outline-none  border my-3">
            confirm
          </button>
        </div>
        <div className=" my-5 text-center">
          <button className="bg-red-600 text-white py-2 px-6 rounded ">
            Start Match
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlayersComponent;
