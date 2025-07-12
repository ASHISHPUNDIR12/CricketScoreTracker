import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface NavbarTypes {
  path: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title1Path?: string;
  title2Path?: string;
  title3Path?: string;
  createMatch?: string;
  createMatchPath?: string;
}

const Navbar = ({
  path,
  title1,
  title2,
  title3,
  title1Path,
  title2Path,
  title3Path,
  createMatch,
  createMatchPath,
}: NavbarTypes) => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  return (
    <div>
      <nav className="bg-[#e20001] flex justify-between px-5 py-3 items-center border-b">
        <Link to={`/${path}`}>
          <div className="text-black font-bold border-white p-1 bg-white rounded-2xl">
            CricHeros
          </div>
        </Link>
        <div
          onClick={() => setIsopen((prev) => !prev)}
          className="text-white font-bold sm:hidden cursor-pointer"
        >
          <HiOutlineBars3 size={24} />
        </div>
        <div className="hidden sm:flex gap-15 text-white">
          <Link to={`/${title1Path}`}>
            <div>{title1}</div>
          </Link>
          <Link to={`/${title2Path}`}>
            <div>{title2}</div>
          </Link>
          <Link to={`/${title3Path}`}>
            <div>{title3}</div>
          </Link>
          <Link to={"/creatematch"}>
            <div>{createMatch}</div>
          </Link>
        </div>
      </nav>
      {/* Animated mobile menu */}
      <div
        className={`
          sm:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ background: "#e20001" }}
      >
        <div className="flex flex-col gap-3 pl-5 p-5 text-white font-extralight ">
          <Link to={`/${title1Path}`} onClick={() => setIsopen(false)}>
            <div>{title1}</div>
          </Link>
          <Link to={`/${title2Path}`} onClick={() => setIsopen(false)}>
            <div>{title2}</div>
          </Link>
          <Link to={`/${title3Path}`} onClick={() => setIsopen(false)}>
            <div>{title3}</div>
          </Link>
          <Link to={`/${createMatchPath}`} onClick={() => setIsopen(false)}>
            <div>{createMatch}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
  