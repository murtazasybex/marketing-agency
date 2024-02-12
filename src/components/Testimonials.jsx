import React from "react";
import { fivestars } from "../assets";
import { testimonialData } from "../constants";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#EAF3F5] mx-auto relative py-5">
      <div className="py-20 w-full max-w-[1100px] mx-auto">
        <div className="flex gap-5 justify-center">
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonial-item flex justify-center items-center">
                <div className="hover-transition w-full max-w-[300px] space-y-6 my-8 h-full max-h-[400px] bg-[#F2F2F2] rounded-2xl border hover:shadow-xl hover:border-black/20 p-5">
                  <div className="flex space-x-5">
                    <img
                      src={testimonial.image}
                      className="w-full max-w-[60px]"
                      alt=""
                    />
                    <div>
                      <h1 className="font-semibold text-[20px] montserrat">
                        {testimonial.name}
                      </h1>
                      <p className="font-light text-[#212833] text-[15px] open-sans">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <img src={fivestars} className="w-full max-w-[90px]" alt="" />
                  <div className="testimonial-content">
                    <p className="text-[15px] font-medium open-sans">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
