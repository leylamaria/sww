import React, { useState } from "react";
import Wasser from "../assets/wasser.svg";

const IconWater = () => {
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
        <img className="w-6 grayscale hover:grayscale-0" src={Wasser} alt="/" />
        {isHovered ? (
          <span className="text-[#0082C8] text-[14px] font-bold ml-2 order-last">
            Wasser
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default IconWater;
