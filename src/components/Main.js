import React from "react";
import Wasser from "../assets/wasser.png";
import Kids from "../assets/kids.png";

const Main = () => {
  return (
    <div className="Main mx-24 my-8">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col ">
          <h1 className="text-[88px] font-black text-[#707070]">Stadtwerke</h1>
          <h2 className="text-[68px]  text-[#707070]">Weiden i.d.Opf.</h2>
        </div>
        <p className="text-[#707070] mt-[130px] ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p>
      </div>
      <div className="grid md:grid-cols-3  mt-20 mb-48 ">
        <img className="h-auto max-w-[400px] rounded-xl " src={Kids} alt="/" />
        <img
          className="h-auto max-w-[400px] rounded-xl  "
          src={Wasser}
          alt="/"
        />
        <img className="h-auto max-w-[400px] rounded-xl" src={Kids} alt="/" />
      </div>
      <div className="text-[#707070] text-center mx-auto w-[800px] my-64">
        <p>Dachzeile für die Überschrift</p>
        <h1 className="text-[84px] font-extrabold">W wie Wir.</h1>
        <h2 className="text-[64px] mt-[-20px] mb-4">Die Stadtwerke Weiden</h2>
        <p>
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
