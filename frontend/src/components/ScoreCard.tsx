import { useNavigate } from "react-router-dom";

const ScoreCard = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/match/${id}`);
  }
  return (
    <div>
      <div>
        <div
          onClick={handleClick}
          className="border border-red-800 bg-orange-100 rounded-2xl m-5 cursor-pointer  "
        >
          <p className="p-3 font-extralight">10 July 2025</p>
          <div className="flex justify-center gap-9  ">
            <div className="team1">
              <h1 className="text-center mb-1">Team 1</h1>
              <p>167-7 (10 ovs) </p>
            </div>
            <div className="team2">
              <h1 className="text-center mb-1">Team 2</h1>
              <p>168-2 (10 ovs) </p>
            </div>
          </div>
          <div className="text-center m-4">
            <p>Team 2 won by 8 wickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const PopupCard = ({
//   onClose,
//   children,
// }: {
//   onClose: () => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 shadow-xl relative min-w-[300px] max-w-md">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//         >
//           ✕
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

export default ScoreCard;
