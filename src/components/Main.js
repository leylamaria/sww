import React from "react";
import Wasser from "../assets/wasser.png";
import Kids from "../assets/kids.png";

const Main = () => {
  return (
    <div className=" mx-24 my-8">
      <div className="grid md:grid-cols-2 text-center">
        <div className="flex flex-col ">
          <h1 className="lg:text-[88px] text-[50px] font-bold text-[#707070]">
            Stadtwerke
          </h1>
          <h2 className="lg:text-[68px] text-[40px] text-[#707070]">
            Weiden i.d.Opf.
          </h2>
        </div>
        <p className="text-[#707070] lg:mt-[130px] mt-[40px] ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-3  mt-20 md:mb-28  ">
          <img className="h-auto rounded-xl " src={Kids} alt="/" />
          <img className="h-auto rounded-xl  " src={Wasser} alt="/" />
          <img className="h-auto rounded-xl" src={Kids} alt="/" />
        </div>
      </div>
      <div className="text-[#707070] text-center mx-auto my-28">
        <p>Dachzeile für die Überschrift</p>
        <h1 className="lg:text-[84px] text-[50px] font-extrabold">
          W wie Wir.
        </h1>
        <h2 className="lg:text-[64px] text-[44px] leading-tight mb-4">
          Die Stadtwerke Weiden
        </h2>
        <p className="lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p>
        <button className="bg-[#ACACAC] uppercase w-[150px] py-2 mt-24 rounded-md text-white ">
          Button action
        </button>
      </div>
    </div>
  );
};

export default Main;
