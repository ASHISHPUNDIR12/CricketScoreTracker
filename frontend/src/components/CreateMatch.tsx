const CreateMatch = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-2xl mt-5  ">Create match </h1>
        <div className="mt-5 flex justify-around items-center">
          <span className="border bg-red-600 px-12 py-10 text-2xl rounded-full">
            T
          </span>
          <span className="text-2xl">vs</span>
          <span className="border px-12 bg-green-600 py-10 text-2xl rounded-full">
            T
          </span>
        </div>
        <form action="submit">
          <div className="flex gap-21  m-7 mt-7">
            <input
              className="w-30 border-b-2 text-center font-extralight outline-none "
              type="text"
              placeholder="Team1 name "
            />
            <input
              className="w-30 border-b-2 text-center font-extralight outline-none"
              type="text"
              placeholder="Team1 name "
            />
          </div>
          <div className="border mx-5 pt-7  ">
            <div className=" p-2 pl-8    ">
              <label className="pr-15">over</label>
              <input
                className="w-12 border text-center rounded border-slate-400 "
                type="number"
                placeholder="20"
              />
            </div>
            <div className="flex  p-2 justify-around ">
              <label className="pl-4">Ground</label>
              <input
                className="border text-center rounded border-slate-400"
                type="text"
                placeholder="Enter Ground Name"
              />
            </div>
            <div className="flex  p-2 gap-6 pl-7">
              <label>Ball type</label>
              <select
                name="ballType"
                className="bg-[#ffebeb] text-[#b71c1c] border border-[#e53935] rounded-lg px-4  shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e53935]"
              >
                <option className="text-gray-500">Ball Type</option>
                <option value="tennis">Tennis</option>
                <option value="flash">Flash</option>
                <option value="leather">Leather</option>
              </select>
            </div>
            <div className=" p-2 pl-7 ">
              <label className="pr-2">Player Count per team </label>
              <input
                className="w-12 border text-center rounded border-slate-400 "
                type="text"
                placeholder=""
              />
            </div>
            <div className="text-center my-5   ">
              <button className="border rounded bg-green-500 text-white  px-5 py-2 ">
                confirm
              </button>
            </div>
          </div>
          <div className="  bg-red-700 text-white text-center mt-10 rounded-2xl border w-45 mx-auto py-5">
            <button>Add Players Name</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMatch;
