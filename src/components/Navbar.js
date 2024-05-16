import React, { useState } from "react";
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
    <nav className="bg-[#C5C3C3] w-[1300px] rounded-xl shadow-[#00000029]-md fixed bottom-0 mb-8 ml-16">
      <div className="flex justify-between items-center mx-auto px-4 ">
        <div className="flex items-center h-20">
          <IconWater />
          <IconGas />
          <IconSun />
          <IconLeaf />
        </div>
        <div className="text-[#a2a0a0] mb-6 ml-36 ">
          <CgMenuRound size={55} />
        </div>
        <div className="flex justify-center">
          <Kontakt />
          <Support />
          <Home />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
