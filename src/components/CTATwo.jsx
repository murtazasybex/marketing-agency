import React from "react";
import { ctaimgtwo } from "../assets";

const CTATwo = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-8 mt-20">
        <div className="flex justify-around flex-wrap lg:flex-nowrap md:py-0 py-3 items-center px-2">
          <div className="flex mx-auto">
            <img src={ctaimgtwo} className="w-full lg:mt-[-7rem]" alt="" />
          </div>
          <div className="space-y-3 flex flex-col items-start justify-start w-full max-w-[500px] mx-auto text-start md:pb-6 pb-12 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white montserrat">
              Bags, Bottels and catalogues
            </h1>

            <p className="text-[15px] text-white font-normal montserrat pb-2">
              From the classic stapled option to sophisticated sewn binding,
              Pixartprinting has a vast range of binding options to suit all
              types of project. Print books, magazines and catalogues and choose
              the product that best meets your commercial or publishing needs.
            </p>
            <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
              Create an account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTATwo;
