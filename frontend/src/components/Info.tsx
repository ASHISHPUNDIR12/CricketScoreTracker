const Info = () => {
  return (
    <div>
      <div>
        <div className="bg-red-600 text-center mt-3 mx-3 p-1">
          Team 1 vs Team 2
        </div>
        <div className="score flex justify-around m-4 gap-3">
          <div>
            <h1 className="font-bold text-2xl">162-7 </h1>
            <p className="font-extralight text-[12px] ml-2 ">(20 ovs)</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">163-7 </h1>
            <p className="font-extralight text-[12px] ml-2">(20 ovs)</p>
          </div>
        </div>
        <div className="date flex justify-around  ">
          <p>Date </p>
          <p>09 july 2025</p>
        </div>
        <div className="location flex justify-around">
          <p>Location</p>
          <p>Dpg college</p>
        </div>
        <div className="overs flex justify-around mr-8 mb-6">
          <p className="mr-7">overs </p>
          <p>20</p>
        </div>
        <div className="text-center mb-3.5 text-[20px] text-green-500 ">
          <p> Team 2 won by 3 wickets</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
