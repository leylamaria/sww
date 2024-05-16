import React from "react";
import Logo from "../assets/logo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="max-w-[1856px] mx-auto p-7">
      <div className="Hero rounded-md">
        <div className="text-left text-white py-12 ms-[132px] ">
          <img className="w-[100px] mb-[250px]" src={Logo} alt="Logo" />
          <h1 className="font-bold italic text-[120px] ">W wie Weiden</h1>
          <p className="text-[16px] max-w-[474px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
