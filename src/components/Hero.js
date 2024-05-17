import React from "react";
import Logo from "../assets/logo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className=" mx-auto md:p-7">
      <div className="Hero rounded-md">
        <div className="text-left text-white py-12 lg:ms-[132px] ms-6 ">
          <img
            className="w-[100px] mb-28 sm:mb-[250px]"
            src={Logo}
            alt="Logo"
          />
          <h1 className="font-bold italic md:text-[120px] text-[80px] ">
            W wie Weiden
          </h1>
          <p className="text-[16px] md:max-w-[474px]">
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
