import React, { useState } from "react";
import Feuer from "../assets/feuer.svg";

const IconGas = () => {
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
        <img className="w-6 grayscale hover:grayscale-0" src={Feuer} alt="/" />
        {isHovered ? (
          <span className="absolute top-2 left-6 text-[#ED2020] text-[14px] font-bold ml-2 order-last">
            Erdgas
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default IconGas;
