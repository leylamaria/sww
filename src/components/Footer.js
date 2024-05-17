import React from "react";
import "./Footer.css";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer flex justify-center items-center">
      <div className="grid grid-col lg:gap-44 gap-20 sm:grid-cols-2 py-32 px-16">
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-16 lg:mb-52">Überschrift</h1>
          <p className=" lg:ml-56 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="">
              <input
                type="text"
                className="rounded-lg py-2 px-8 mb-4 sm:w-full"
              />
              <input
                type="text"
                className="rounded-lg py-2 px-8 mb-4 sm:w-full"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="rounded-lg py-2 px-8 mb-4 sm:w-full"
              />
              <input
                type="text"
                className="rounded-lg py-2 px-8 mb-4 sm:w-full"
              />
            </div>
          </div>
          <textarea className="rounded-lg w-auto sm:w-full" rows="8"></textarea>
          <div className="flex flex-row">
            <input className="p-2" type="checkbox" />
            <small className="text-white ml-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </small>
          </div>
          <div className="flex justify-end">
            <button className="flex items-center justify-center text-white border w-28 rounded-lg mt-4">
              Senden
              <MdArrowOutward className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
