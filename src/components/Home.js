import React, { useState } from "react";
import Kids from "../assets/kids.png";
import { IoMdPerson } from "react-icons/io";
import "./Home.css";

const Home = () => {
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
        className="flex items-center border-white border-2 rounded-md text-white uppercase font-extrabold px-3 text-[14px] mr-3 hover:bg-white hover:text-[#C5C3C3]"
      >
        Stadtwerke
        <IoMdPerson className="ml-2" />
      </button>
      {showBox ? (
        <div className="fixed bottom-28 left-16 w-[1300px] bg-white py-8 px-16 rounded-lg ">
          <h1 className="text-[#C5C3C3] text-2xl mb-16 ">Menü</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <ul className="text-[#C5C3C3] mt-24 ">
                <li className="text-3xl disc-red">Home</li>
                <li className="text-3xl">Kontakt</li>
                <li className="text-3xl">Support</li>
                <li className="text-3xl">Menüpunkt</li>
                <li className="text-xl">
                  Untermenü 1 | Untermenü 2 | Untermenü 3
                </li>
              </ul>
            </div>

            <div>
              <img
                className="w-full border-[#C5C3C3] border-l-2 pl-4 "
                src={Kids}
                alt="Familie"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Home;
