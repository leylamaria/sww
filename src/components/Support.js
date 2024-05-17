import React, { useState } from "react";
import Wasser from "../assets/wasser.png";
import { RxQuestionMarkCircled } from "react-icons/rx";
import "./Support.css";

const Support = () => {
  const [showBox, setShowBox] = useState(false);

  const handleMenuClick = () => {
    if (showBox) {
      setShowBox(false);
    } else {
      setShowBox(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleMenuClick}
        className="flex items-center border-white border-2 rounded-md text-white uppercase font-extrabold px-3 text-[14px] mr-3 hover:bg-white hover:text-[#C5C3C3] "
      >
        Support
        <RxQuestionMarkCircled className="ml-2" />
      </button>
      {showBox ? (
        <div className="fixed bottom-28 left-16 w-[90%] bg-white py-8 px-16 rounded-lg ">
          <h1 className="text-[#C5C3C3] text-2xl mb-16 ">Menü</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <ul className="text-[#C1C3C3] mt-24 ">
                <li className="p-1 text-3xl">Home</li>
                <li className="p-1 text-3xl">Kontakt</li>
                <li className="p-1 text-3xl disc-red">Support</li>
                <li className="p-1 text-3xl">Menüpunkt</li>
                <li className="p-1 text-xl">
                  Untermenü 1 | Untermenü 2 | Untermenü 3
                </li>
              </ul>
            </div>

            <div>
              <img
                className="w-full border-[#C5C3C3] border-l-2 pl-4 "
                src={Wasser}
                alt="Familie"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Support;
