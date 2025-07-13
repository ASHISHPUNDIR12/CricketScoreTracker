
const batsmen = [
  { name: "Ashish Pundir", runs: 100, balls: 60, fours: 10, sixes: 5, sr: 166.7 },
  { name: "John Doe", runs: 45, balls: 38, fours: 4, sixes: 1, sr: 118.4 },
  { name: "Jane Smith", runs: 32, balls: 27, fours: 2, sixes: 2, sr: 118.5 },
  { name: "Alex Kumar", runs: 23, balls: 15, fours: 3, sixes: 1, sr: 153.3 }
];
const bowlers = [
  { name: "Rahul Sharma", overs: 4, maidens: 0, runs: 28, wickets: 2, eco: 7.0 },
  { name: "Vikram Singh", overs: 4, maidens: 1, runs: 20, wickets: 3, eco: 5.0 },
  { name: "Ajay Mehra", overs: 3, maidens: 0, runs: 32, wickets: 1, eco: 10.7 },
  { name: "Sunil Patel", overs: 2, maidens: 0, runs: 18, wickets: 0, eco: 9.0 }
];

const Team1Score = () => (
  <div className="max-w-xl mx-auto">
    <div className="grid grid-cols-6 font-bold border-b pb-2">
      <span className="text-left pl-1 ">Batter</span>
      <span className="text-center ml-4 ">R</span>
      <span className="text-center ">B</span>
      <span className="text-center ">4s</span>
      <span className="text-center">6s</span>
      <span className="text-center">SR</span>
    </div>
    {batsmen.map((batsman, idx) => (
      <div
        key={idx}
        className="grid grid-cols-6 items-center border-b py-2"
      >
        <span className="text-left pl-1 ">{batsman.name}</span>
        <span className="text-center ml-4 ">{batsman.runs}</span>
        <span className="text-center">{batsman.balls}</span>
        <span className="text-center">{batsman.fours}</span>
        <span className="text-center">{batsman.sixes}</span>
        <span className="text-center">{batsman.sr}</span>
      </div>
    ))}

        <div className="grid grid-cols-6 font-bold border-b pb-2 py-3 ">
      <span className="text-left pl-1 ">Bowler</span>
      <span className="text-center ml-4 ">O</span>
      <span className="text-center ">M</span>
      <span className="text-center ">R</span>
      <span className="text-center">W</span>
      <span className="text-center">Eco</span>
    </div>
     {bowlers.map((bowler, idx) => (
      <div
        key={idx}
        className="grid grid-cols-6 items-center border-b py-2"
      >
        <span className="text-left pl-1 ">{bowler.name}</span>
        <span className="text-center ml-4 ">{bowler.overs}</span>
        <span className="text-center">{bowler.maidens}</span>
        <span className="text-center">{bowler.runs}</span>
        <span className="text-center">{bowler.wickets}</span>
        <span className="text-center">{bowler.eco}</span>
      </div>
    ))}
  </div>
);

export default Team1Score;