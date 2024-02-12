import React from "react";
import { bestSellerItems } from "../constants";

const BestSeller = () => {
  return (
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[24px] py-6 px-2 pl-6 montserrat">
        Best Seller
      </h1>
      <div className="flex justify-between">
        {bestSellerItems.map((item, index) => (
          <div key={index}>
            <div className="py-2">
              <img
                src={item.image}
                className="w-full max-w-[230px] hover-transition"
                alt=""
              />
              <p className="pl-6 pt-3 text-[16px] inter">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
