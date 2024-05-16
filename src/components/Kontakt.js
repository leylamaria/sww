import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";

const Kontakt = () => {
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
        className="flex items-center border-white border-2 rounded-md text-white uppercase font-extrabold px-3 text-[14px] mr-3  hover:bg-white hover:text-[#C5C3C3]"
      >
        Kontakt
        <span>
          <FiPhone className="ml-2" />
        </span>
      </button>
      {showBox ? (
        <div className="fixed bottom-28 right-[78px] w-[620px] bg-white py-8 px-16 rounded-lg ">
          <h1 className="text-4xl text-[#C5C3C3] mb-12">Kontakt</h1>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-3 mb-4">
              <input
                type="text"
                className="w-full rounded-lg py-2 px-8 bg-[#C5C3C3] "
              />
              <input
                type="text"
                className="w-full rounded-lg py-2 px-8 bg-[#C5C3C3] "
              />
            </div>
            <div className="flex flex-row gap-3 mb-4 ">
              <input
                type="text"
                className="w-full rounded-lg py-2 px-8 bg-[#C5C3C3]"
              />
              <input
                type="text"
                className="w-full rounded-lg py-2 px-8 bg-[#C5C3C3]"
              />
            </div>
            <textarea className="rounded-lg bg-[#C5C3C3]" rows="8"></textarea>
            <div className="flex flex-row">
              <input className="p-2 " type="checkbox" />
              <small className="text-[#C5C3C3] p-2 ml-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </small>
            </div>
            <button className="text-[#C5C3C3] border shadow-xl w-28 rounded-lg ml-[380px] mt-4">
              Senden
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Kontakt;
