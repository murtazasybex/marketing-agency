import React from "react";
import { onSaleItems } from "../constants";

const OnSale = () => {
  return (
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[24px] py-3 mt-6 pl-6 px-2">On Sale</h1>
      <div className="flex justify-between">
        {onSaleItems.map((item, index) => (
          <div key={index}>
            <div className="py-3">
              <img
                src={item.image}
                className="w-full max-w-[250px] hover-transition"
                alt=""
              />
              <p className="pl-2 pt-3 text-[16px] inter">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnSale;
