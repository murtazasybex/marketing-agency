import React from "react";
import { brandServiceItems } from "../constants";

const BuildBrand = () => {
  return (
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[24px] py-6 mt-6 pl-3 px-2 montserrat">
        Build Your Brand On Any Budget
      </h1>
      <div className="flex justify-between">
        {brandServiceItems.map((item, index) => (
          <div key={index}>
            <div className="py-3">
              <img
                src={item.image}
                className="w-full max-w-[230px] hover-transition"
                alt=""
              />
              <p className="pl-2 pt-3 text-[17px] inter">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildBrand;
