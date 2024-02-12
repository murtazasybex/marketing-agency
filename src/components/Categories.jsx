import React from "react";
import { carouselItems } from "../constants";

const Categories = () => {
  return (
    <>
      <section className="w-full container mx-auto relative z-0 px-2">
        <div className="pb-6">
          <h1 className="font-bold text-[24px] py-6 px-2 pl-6 montserrat">
            Explore all categories
          </h1>
          <div className="flex justify-between">
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full max-w-[130px] my-5">
                <div className="hover:drop-shadow-md mx-auto bg-[#1A7E91] hover:bg-[#1A7E91]/90 transition-colors flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                  <img src={item.image} className="hover-transition" alt="" />
                </div>
                <p className="text-center pt-3 text-[16px] inter">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
