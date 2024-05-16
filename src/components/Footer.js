import React from "react";
import "./Footer.css";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer max-w-[1856px] mx-auto p-7">
      <div className="grid gap-44 grid-cols-2 p-32">
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-52">Überschrift</h1>
          <p className="w-[60%] ml-56 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 mb-4">
            <input type="text" className="rounded-lg py-2 px-8" />
            <input type="text" className="rounded-lg py-2 px-8" />
          </div>
          <div className="flex flex-row gap-3 mb-4">
            <input type="text" className="rounded-lg py-2 px-8" />
            <input type="text" className="rounded-lg py-2 px-8" />
          </div>
          <textarea className="rounded-lg" rows="8"></textarea>
          <div className="flex flex-row">
            <input className="p-2" type="checkbox" />
            <small className="text-white p-2 ml-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </small>
          </div>
          <button className="flex items-center justify-center text-white border w-28 rounded-lg ml-[330px] mt-4">
            Senden
            <MdArrowOutward className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
