import React from "react";
import Asset from "../assets/Asset.png";
import { MdArrowOutward } from "react-icons/md";

const Aktuelles = () => {
  return (
    <div className="mx-auto bg-[#E0DFDF] text-[#707070] py-7">
      <h1 className="md:text-[84px] text-[44px] font-bold mx-5 mt-28 mb-10">
        Aktuelles
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mb-44">
        <div>
          <img className="w-[350px] " src={Asset} alt="Woman working" />
          <div className="  ml-6 ">
            <h2 className="text-[24px] font-bold my-2 ">News Headline</h2>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3 className="flex items-center uppercase font-black my-3">
              Read more <MdArrowOutward className="ml-1" />
            </h3>
          </div>
        </div>
        <div>
          <img className="w-[350px] " src={Asset} alt="Woman working" />
          <div className="w-[80%] ml-6 ">
            <h2 className="text-[24px] font-bold my-2 ">News Headline</h2>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3 className="flex items-center uppercase font-black my-3">
              Read more <MdArrowOutward className="ml-1" />
            </h3>
          </div>
        </div>
        <div>
          <img className="w-[350px] " src={Asset} alt="Woman working" />
          <div className="w-[80%] ml-6 ">
            <h2 className="text-[24px] font-bold my-2 ">News Headline</h2>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3 className="flex items-center uppercase font-black my-3">
              Read more <MdArrowOutward className="ml-1" />
            </h3>
          </div>
        </div>
        <div>
          <img className="w-[350px] " src={Asset} alt="Woman working" />
          <div className="w-[80%] ml-6 ">
            <h2 className="text-[24px] font-bold my-2 ">News Headline</h2>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3 className="flex items-center uppercase font-black my-3">
              Read more <MdArrowOutward className="ml-1" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktuelles;
