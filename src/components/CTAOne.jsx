import React from "react";
import { ctaimgone } from "../assets";

const CTAOne = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full mt-32">
        <div className="flex justify-evenly md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 border items-center px-2">
          <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[500px] text-start md:py-0 py-6 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white montserrat">
              Frames , books and catalogues
            </h1>

            <p className="text-[15px] text-white font-normal pb-2 montserrat">
              From the classic stapled option to sophisticated sewn binding,
              Pixartprinting has a vast range of binding options to suit all
              types of project. Print books, magazines and catalogues and choose
              the product that best meets your commercial or publishing needs.
            </p>
            <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
              Create an account
            </button>
          </div>
          <div className="">
            <img src={ctaimgone} className="w-full lg:mt-[-7rem]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
