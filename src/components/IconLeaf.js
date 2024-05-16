import React, { useState } from "react";
import Blatt from "../assets/blatt.svg";

const IconLeaf = () => {
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
        <img className="w-6 grayscale hover:grayscale-0" src={Blatt} alt="/" />
        {isHovered ? (
          <span className="absolute top-4 left-6  text-[#46c800] text-[14px] font-bold ml-2 order-last">
            Energiezukunft
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default IconLeaf;
