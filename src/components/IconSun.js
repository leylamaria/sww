import React, { useState } from "react";
import Sonne from "../assets/sonne.svg";

const IconSun = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div className="p-2">
      <div
        className="relative flex"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img className="w-6 grayscale hover:grayscale-0" src={Sonne} alt="/" />
        {isHovered ? (
          <span className="text-[#f0bb3f] text-[14px] font-bold ml-2 order-last">
            Strom
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default IconSun;
