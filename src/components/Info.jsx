import React from "react";

const Info = () => {
  return (
    <>
      <section className="w-full mx-auto relative">
        <div className="bg-[#F8F8F8] w-full md:py-24 py-18">
          <div className="flex justify-around flex-wrap space-x-3 lg:flex-nowrap md:py-0 py-16 items-center px-2">
            <div className="text-start space-y-5 w-full max-w-[500px] px-2">
              <h1 className="font-bold leading-none md:text-[44px] text-[28px] text-black inter">
                Here for small business since 1995.
              </h1>
              <p className="md:text-[17px] text-[14px] text-black pb-5 inter">
                For more than 20 years, Our website has helped small business
                owners, entrepreneurs and dreamers create custom designs and
                professional marketing. Our online printing services are
                intended to help you find custom products you need – business
                cards, promotional marketing and more – to create a look you
                love.
              </p>
            </div>
            <div className="text-start w-full max-w-[500px]">
              <h1 className="font-bold text-[18px] text-black inter">
                Easy Design
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                Our online tools make the process as simple and clear as
                possible, and we’re working to improve your experience all the
                time.
              </p>
              <h1 className="font-bold text-[18px] text-black inter">
                Make It Match
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                Our designs can be used across multiple printed products, which
                makes it easier for you to create consistent, professional
                marketing.
              </p>
              <h1 className="font-bold text-[18px] text-black inter">
                Absolutely Guaranteed
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                We stand by everything we sell. So if you’re not satisfied,
                we’ll make it right.
                <a
                  className="underline inter hover:text-[#1A7E91] hover:no-underline pl-1"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
