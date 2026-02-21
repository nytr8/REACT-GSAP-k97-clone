import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[lau2] gap-5 flex justify-center items-center">
      <Link
        to="/projets"
        className="border-3 hover:text-[#D3FD50] hover:cursor-pointer text-[6vw] uppercase rounded-full px-10 h-30 pt-5 flex items-center justify-center"
      >
        projets
      </Link>

      <Link
        to="/agence"
        className="border-3 hover:text-[#D3FD50] hover:cursor-pointer text-[6vw] uppercase rounded-full px-10 h-30 pt-5 flex items-center justify-center"
      >
        agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
