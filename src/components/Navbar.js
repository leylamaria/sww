import React from "react";
import IconWater from "./IconWater";
import IconGas from "./IconGas";
import IconSun from "./IconSun";
import IconLeaf from "./IconLeaf";
import { CgMenuRound } from "react-icons/cg";
import Kontakt from "./Kontakt";
import Support from "./Support";
import Home from "./Home";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <nav className="w-[90%] bg-[#C5C3C3] rounded-xl shadow-[#00000029]-md fixed bottom-0 mb-8">
        <div className="flex justify-between items-center px-4 ">
          <div className="flex items-center h-20">
            <IconWater />
            <IconGas />
            <IconSun />
            <IconLeaf />
          </div>
          <div className="text-[#a2a0a0] md:pl-24">
            <CgMenuRound size={55} />
          </div>
          <div className="justify-center hidden md:flex">
            <Kontakt />
            <Support />
            <Home />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
