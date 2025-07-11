import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const  Navbar = () => {
  return (
    <div  >
      <nav className="bg-[#e20001] flex justify-between px-5 py-3 items-center border-b   " >
         <Link to={"/"} ><div className="text-black font-bold border-white p-1 bg-white rounded-2xl " >CricHeros</div></Link>
        <div className="text-white font-bold sm:hidden " >
          < HiOutlineBars3 size={24} />
        </div>
        <div className="hidden sm:flex gap-15 text-white   "   >
         <Link to={"/"}  ><div>Home</div></Link> 
         <Link to={"/"}  ><div>Contact us</div></Link> 
         <Link to={"/signup"}  ><div>SignUp</div></Link> 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
