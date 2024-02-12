import React, { useState } from "react";
import help from "../assets/help.svg";
import signin from "../assets/signin.svg";
import search from "../assets/search.svg";
import myprojects from "../assets/myprojects.svg";
import cart from "../assets/cart.svg";
import bestsellerone from "../assets/bestseller-one.svg";
import bestsellertwo from "../assets/bestseller-two.svg";
import bestsellerthree from "../assets/bestseller-three.svg";
import bestsellerfour from "../assets/bestseller-four.svg";
import bestsellerfive from "../assets/bestseller-five.svg";
import onsaleone from "../assets/onsale-one.svg";
import onsaletwo from "../assets/onsale-two.svg";
import onsalethree from "../assets/onsale-three.svg";
import onsalefour from "../assets/onsale-four.svg";
import onsalefive from "../assets/onsale-five.svg";
import brandservicesone from "../assets/brandservices-one.svg";
import brandservicestwo from "../assets/brandservices-two.svg";
import brandservicesthree from "../assets/brandservices-three.svg";
import brandservicesfour from "../assets/brandservices-four.svg";
import brandservicesfive from "../assets/brandservices-five.svg";
import socialmediaone from "../assets/socialmedia-one.svg";
import socialmediatwo from "../assets/socialmedia-two.svg";
import socialmediathree from "../assets/socialmedia-three.svg";
import socialmediafour from "../assets/socialmedia-four.svg";
import ctabackground from "../assets/ctabg.svg";
import quality from "../assets/quality.svg";
import valueformoney from "../assets/valueformoney.svg";
import advisor from "../assets/advisor.svg";
import speedreliability from "../assets/speedreliability.svg";
import flyers from "../assets/flyers.svg";
import tshirt from "../assets/tshirt.svg";
import bookcover from "../assets/bookcover.svg";
import cup from "../assets/cup.svg";
import weddingcard from "../assets/weddingcard.svg";
import lamp from "../assets/lamp.svg";
import gift from "../assets/gift.svg";
import frame from "../assets/frame.svg";
import cards from "../assets/cards.svg";
import bottle from "../assets/bottle.svg";
import bannerimg from "../assets/bannerimg.svg";
import ctaimg from "../assets/ctaimg.png";
import ctaimgone from "../assets/ctaimgone.png";
import ctaimgtwo from "../assets/ctaimgtwo.png";
import fb from "../assets/fb.svg";
import x from "../assets/x.svg";
import insta from "../assets/insta.svg";
import network from "../assets/network.svg";
import pinterest from "../assets/pinterest.svg";
import youtube from "../assets/youtube.svg";
import wordpress from "../assets/wordpress.svg";
import linkedin from "../assets/linkedin.svg";
import country from "../assets/country.svg";
import arrow from "../assets/arrow.svg";
import testimonialimgone from "../assets/testimonialimg-one.svg";
import testimonialimgtwo from "../assets/testimonialimg-two.svg";
import testimonialimgthree from "../assets/testimonialimg-three.svg";
import fivestars from "../assets/fivestars.svg";
import Footer from "./Footer";

const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  let Products = [
    {
      img: bestsellerone,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: bestsellertwo,
      title: "Black keyboard",
      description: "lorem ipsum dolar",
      price: 70,
    },
    {
      img: bestsellerthree,
      title: "Apple Watch",
      description: "lorem ipsum dolar",
      price: 990,
    },
    {
      img: bestsellerfour,
      title: "Black Mouse",
      description: "lorem ipsum dolar",
      price: 30,
    },
    {
      img: bestsellerfive,
      title: "accer laptop",
      description: "lorem ipsum dolar",
      price: 999,
    },
    {
      img: bestsellerfour,
      title: "Leather Watch",
      description: "lorem ipsum dolar",
      price: 880,
    },
    {
      img: bestsellerthree,
      title: "One plus monitor",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: bestsellertwo,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: bestsellerone,
      title: "Mouse",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: bestsellerfour,
      title: "leather",
      description: "lorem ipsum dolar",
      price: 40,
    },
  ];

  const countries = [
    { name: "United States", image: "country.svg" },
    { name: "United Kingdom", image: "country.svg" },
    { name: "France", image: "country.svg" },
    { name: "Germany", image: "country.svg" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(Products);
  const searchHandler = (e) => {
    const filteredArray = Products.filter((product) =>
      product.title.toLocaleLowerCase().includes(e.target.value)
    );
    if (filteredArray.length != 0) {
      setFilteredProducts(filteredArray);
    }
  };
  return (
    <section className="w-full container mx-auto relative">
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center space-x-3 md:flex-nowrap flex-wrap p-4 bg-white">
          {/* <h1 className="text-xl font-bold">Agency</h1> */}
          <div className="search flex px-3 py-2 border rounded-lg w-full md:max-w-[900px] max-w-[420px]">
            <button onClick={() => searchHandler()}>
              <img src={search} className="w-4 h-4" alt="" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-0 px-3 w-full font-extralight"
              onChange={searchHandler}
            />
          </div>
          <div className="flex justify-between items-center md:mt-0 mt-5 w-full max-w-[400px]">
            <div className="flex items-center space-x-3">
              <img src={help} alt="" />
              <a href="#" className="text-[14px] hover:underline font-normal">
                Help
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={myprojects} alt="" />
              <a href="#" className="text-[14px] hover:underline font-normal">
                My Projects
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={signin} alt="" />
              <a href="#" className="text-[14px] hover:underline font-normal">
                Signin
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={cart} alt="" />
              <a href="#" className="text-[14px] hover:underline font-normal">
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="categories bg-white text-[14px] w-full flex justify-between md:shadow-md md:border-b-2 space-x-2 px-2 py-5">
          <div className=" hover:underline">
            <p className="text-[#FF1010] font-normal">Deals</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Business Cards</p>
          </div>
          <div className="hover:underline">
            <p className="font-normal">Postcards & Print Advertising</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Signs, Banners & Posters</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Labels, Stickers & Packaging</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Home & Gifts</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">
              Celebrations, Invitations & Stationery
            </p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Wedding</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Clothing & Bags</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Promotional Products</p>
          </div>
          <div className=" hover:underline">
            <p className="font-normal">Design & Logo</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="home-banner bg-cover bg-left md:bg-center rounded-xl w-full bg-no-repeat my-6">
        <div className="flex justify-between lg:flex-row flex-col md:py-0 py-16 items-center">
          <div className="space-y-5 pl-10">
            <h1 className="font-bold uppercase text-[28px] md:text-[42px] text-white">
              PRINTING DIGITAL SERVICE AGENCY{" "}
            </h1>
            <p className="md:text-[18px] text-[14px] text-white">
              Create an account and use code NEW25 at checkout.
            </p>
            <button className="py-3 md:px-6 px-4 bg-white hover:bg-white/80 transition-colors rounded-full font-semibold">
              Create an account
            </button>
          </div>
          <div className="">
            <img src={bannerimg} className="w-full" alt="" />
          </div>
        </div>
      </div>

      {/* All Categories */}
      <div className="pb-10">
        <h1 className="font-bold text-[18px] py-3 px-2 pl-6">
          Explore all categories
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-5 px-2">
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={bottle} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Bottel</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={cards} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Cards</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={frame} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Frame</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={gift} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Gift Box</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={lamp} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Lamp</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={weddingcard} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Wedding card</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={cup} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Cup</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={bookcover} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Book cover</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={tshirt} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">T-Shirt</p>
          </div>
          <div className="w-full max-w-[130px] my-5">
            <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
              <img src={flyers} className="" alt="" />
            </div>
            <p className="text-center pt-3 text-[14px]">Flyers</p>
          </div>
        </div>
      </div>
      {/* Value */}
      <div className="flex items-center justify-between px-2 md:gap-2 gap-5 md:flex-row flex-col my-8">
        <div className="flex items-center justify-between border rounded-md space-x-5 px-6 py-2.5">
          <img src={quality} className="w-full max-w-[40px]" alt="" />
          <p className="text-[13px]">Committed to quality</p>
        </div>
        <div className="flex items-center justify-between border rounded-md space-x-5 px-6 py-2.5">
          <img src={valueformoney} className="w-full max-w-[40px]" alt="" />
          <p className="text-[13px]">Value for money</p>
        </div>
        <div className="flex items-center justify-between border rounded-md space-x-5 px-6 py-2.5">
          <img src={speedreliability} className="w-full max-w-[40px]" alt="" />
          <p className="text-[13px]">Speed & Reliability</p>
        </div>
        <div className="flex items-center justify-between border rounded-md space-x-5 px-6 py-2.5">
          <img src={advisor} className="w-full max-w-[40px]" alt="" />
          <p className="text-[13px]">Professional adviser</p>
        </div>
      </div>
      {/* Best Seller */}
      <h1 className="font-bold text-[18px] py-6 px-2 pl-6">Best Seller</h1>
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-2 px-2">
        <div className="drop-shadow-lg">
          <img src={bestsellerone} className="w-full max-w-[230px]" alt="" />
          <p className="pl-6 pt-3 text-[14px]">Book</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={bestsellertwo} className="w-full max-w-[230px]" alt="" />
          <p className="pl-6 pt-3 text-[14px]">Shopping Bag</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={bestsellerthree} className="w-full max-w-[230px]" alt="" />
          <p className="pl-6 pt-3 text-[14px]">Frame</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={bestsellerfour} className="w-full max-w-[230px]" alt="" />
          <p className="pl-6 pt-3 text-[14px]">Invitation Card</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={bestsellerfive} className="w-full max-w-[230px]" alt="" />
          <p className="pl-6 pt-3 text-[14px]">Calender</p>
        </div>
      </div>
      {/* OnSale */}
      <h1 className="font-bold text-[18px] py-6 mt-6 pl-6 px-2">On Sale</h1>
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2">
        <div className="drop-shadow-lg">
          <img src={onsaleone} className="w-full max-w-[240px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">T-Shirts</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={onsaletwo} className="w-full max-w-[240px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">Jewelry box</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={onsalethree} className="w-full max-w-[240px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">Tote Bag</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={onsalefour} className="w-full max-w-[240px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">Gift Wrap</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={onsalefive} className="w-full max-w-[240px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">Business Card</p>
        </div>
      </div>

      {/* CTA1 */}
      <div className="bg-[#1A7E91] w-full bg-no-repeat my-10">
        <div className="flex justify-center flex-wrap lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="flex mx-auto">
            <img
              src={ctaimgone}
              className="w-full max-w-[700px] drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="space-y-3 flex flex-col items-start justify-start w-full max-w-[600px] mx-auto text-start md:py-0 py-12 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white">
              Frames , books and catalogues
            </h1>

            <p className="text-[15px] text-white font-light pb-2">
              From the classic stapled option to sophisticated sewn binding,
              Pixartprinting has a vast range of binding options to suit all
              types of project. Print books, magazines and catalogues and choose
              the product that best meets your commercial or publishing needs.
            </p>
            <button className="py-2 px-14 bg-white hover:bg-white/80 transition-colors text-[#5C5C5C] rounded-full font-semibold mt-5">
              Create an account
            </button>
          </div>
        </div>
      </div>

      {/* Build Your Brand On Any Budget */}
      <h1 className="font-bold text-[18px] py-6 mt-6 pl-3 px-2">
        Build Your Brand On Any Budget
      </h1>
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2">
        <div className="drop-shadow-lg">
          <img src={brandservicesone} className="w-full max-w-[230px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]"> Presentation folder</p>
        </div>
        <div className="drop-shadow-lg">
          <img src={brandservicestwo} className="w-full max-w-[230px]" alt="" />
          <p className="pl-2 pt-3 text-[14px]">Brochures</p>
        </div>
        <div className="drop-shadow-lg">
          <img
            src={brandservicesthree}
            className="w-full max-w-[230px]"
            alt=""
          />
          <p className="pl-2 pt-3 text-[14px]">Sheet Stickers</p>
        </div>
        <div className="drop-shadow-lg">
          <img
            src={brandservicesfour}
            className="w-full max-w-[230px]"
            alt=""
          />
          <p className="pl-2 pt-3 text-[14px]">Pens</p>
        </div>
        <div className="drop-shadow-lg">
          <img
            src={brandservicesfive}
            className="w-full max-w-[230px]"
            alt=""
          />
          <p className="pl-2 pt-3 text-[14px]">Flyers</p>
        </div>
      </div>

      {/* Made By You */}
      <h1 className="font-bold text-[18px] mt-7 pl-6 px-2">Made By You</h1>
      <p className="text-[14px] pb-6 pt-2 pl-6 px-2">
        We love to see your custom creations. Post a photo on social media and
        add us for a chance to be featured here.
      </p>
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2 pb-6">
        <div className="drop-shadow-lg">
          <img src={socialmediaone} className="w-full max-w-[230px]" alt="" />
        </div>
        <div className="drop-shadow-lg">
          <img src={socialmediatwo} className="w-full max-w-[230px]" alt="" />
        </div>
        <div className="drop-shadow-lg">
          <img src={socialmediathree} className="w-full max-w-[230px]" alt="" />
        </div>
        <div className="drop-shadow-lg">
          <img src={socialmediafour} className="w-full max-w-[230px]" alt="" />
        </div>
        <div className="drop-shadow-lg">
          <img src={socialmediathree} className="w-full max-w-[230px]" alt="" />
        </div>
      </div>

      {/* CTA2 */}
      <div className="bg-[#1A7E91] w-full bg-no-repeat">
        <div className="flex justify-center flex-wrap lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="flex mx-auto">
            <img
              src={ctaimgtwo}
              className="w-full max-w-[700px] drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="space-y-3 flex flex-col items-start justify-start w-full max-w-[600px] mx-auto text-start md:pb-0 pb-12 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white">
              Bags, Bottels and catalogues
            </h1>

            <p className="text-[15px] text-white font-light pb-2">
              From the classic stapled option to sophisticated sewn binding,
              Pixartprinting has a vast range of binding options to suit all
              types of project. Print books, magazines and catalogues and choose
              the product that best meets your commercial or publishing needs.
            </p>
            <button className="py-2 px-14 bg-white hover:bg-white/80 transition-colors text-[#5C5C5C] rounded-full font-semibold mt-5">
              Create an account
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap py-20 mx-auto items-center justify-center md:space-y-0 space-y-5 gap-2 md:space-x-8">
        <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
          <div className="flex space-x-5">
            <img src={testimonialimgone} alt="" />
            <div>
              <h1 className="font-semibold text-[18px]">ANDRUE</h1>
              <p className="font-light text-[#212833] text-[14px]">
                January 2 ,2024
              </p>
            </div>
          </div>
          <img src={fivestars} className="w-full max-w-[90px]" alt="" />
          <p className="text-[14px]">
            I recently used this website for my printing needs, and I'm
            thoroughly impressed. The user-friendly interface made design
            customization a breeze. The print quality was outstanding, with
            vibrant colors and crisp details. What stood out was their swift
            turnaround – my prints arrived well within the promised time frame.
            The efficient service, coupled with responsive customer support,
            added to the overall positive experience. I highly recommend
          </p>
        </div>
        <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
          <div className="flex space-x-5">
            <img src={testimonialimgtwo} alt="" />
            <div>
              <h1 className="font-semibold text-[18px]">ANDRUE</h1>
              <p className="font-light text-[#212833] text-[14px]">
                January 2 ,2024
              </p>
            </div>
          </div>
          <img src={fivestars} className="w-full max-w-[90px]" alt="" />
          <p className="text-[14px]">
            I recently used this website for my printing needs, and I'm
            thoroughly impressed. The user-friendly interface made design
            customization a breeze. The print quality was outstanding, with
            vibrant colors and crisp details. What stood out was their swift
            turnaround – my prints arrived well within the promised time frame.
            The efficient service, coupled with responsive customer support,
            added to the overall positive experience. I highly recommend
          </p>
        </div>
        <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
          <div className="flex space-x-5">
            <img src={testimonialimgthree} alt="" />
            <div>
              <h1 className="font-semibold text-[18px]">ANDRUE</h1>
              <p className="font-light text-[#212833] text-[14px]">
                January 2 ,2024
              </p>
            </div>
          </div>
          <img src={fivestars} className="w-full max-w-[90px]" alt="" />
          <p className="text-[14px]">
            I recently used this website for my printing needs, and I'm
            thoroughly impressed. The user-friendly interface made design
            customization a breeze. The print quality was outstanding, with
            vibrant colors and crisp details. What stood out was their swift
            turnaround – my prints arrived well within the promised time frame.
            The efficient service, coupled with responsive customer support,
            added to the overall positive experience. I highly recommend
          </p>
        </div>
      </div>

      {/* CTA3 */}
      <div className="bg-[#1A7E91] bg-cover w-full bg-no-repeat py-6">
        <div className="flex justify-center flex-wrap lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="flex mx-auto">
            <img
              src={ctaimg}
              className="w-full max-w-[700px] drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center w-full max-w-[700px] mx-auto text-center md:pb-0 pb-12">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white">
              It's good to be on the list.
            </h1>
            <p className="md:text-[18px] font-medium text-[14px] text-white pb-5">
              Get 15% off your order when you sign up for our emails
            </p>
            <input
              type="text"
              className="outline-none rounded-lg w-full font-light py-1.5 px-3"
              placeholder="Subscription email"
            />
            <p className="text-[14px] text-white font-light pb-2">
              Yes, I'd like to receive special offer emails from our website ,
              as well as news about products, services and my designs in
              progress. Read our
            </p>
            <a href="#" className="underline text-white text-[14px] font-light">
              Privacy and Cookie policy.
            </a>
            <button className="py-2 px-14 bg-white hover:bg-white/80 transition-colors text-[#5C5C5C] rounded-full font-semibold mt-5">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-[#F8F8F8] w-full md:py-24 py-18">
        <div className="flex justify-between flex-wrap space-x-2 lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="text-start mx-auto  w-full max-w-[520px]">
            <h1 className="font-bold md:text-[44px] text-[28px] text-black">
              Here for small <br />
              business since 1995.
            </h1>
            <p className="md:text-[18px] text-[14px] text-black pb-5">
              For more than 20 years, Our website has helped small business
              owners, entrepreneurs and dreamers create custom designs and
              professional marketing. Our online printing services are intended
              to help you find custom products you need – business cards,
              promotional marketing and more – to create a look you love.
            </p>
          </div>
          <div className="text-start mx-auto w-full max-w-[500px]">
            <h1 className="font-bold text-[18px] text-black">Easy Design</h1>
            <p className="text-[14px] text-black pb-5">
              Our online tools make the process as simple and clear as possible,
              and we’re working to improve your experience all the time.
            </p>
            <h1 className="font-bold text-[18px] text-black">Make It Match</h1>
            <p className="text-[14px] text-black pb-5">
              Our designs can be used across multiple printed products, which
              makes it easier for you to create consistent, professional
              marketing.
            </p>
            <h1 className="font-bold text-[18px] text-black">
              Absolutely Guaranteed
            </h1>
            <p className="text-[14px] text-black pb-5">
              We stand by everything we sell. So if you’re not satisfied, we’ll
              make it right.{" "}
              <a
                className="underline hover:text-black/80 hover:no-underline"
                href="#"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Footer */}
      <div className="bg-[#151515] bg-cover w-full md:py-20 py-6 px-5">
        <div className="flex justify-evenly flex-wrap lg:flex-nowrap md:py-0 py-16 space-y-8 items-center px-2">
          <div className="text-start mx-auto w-full max-w-[320px] space-y-3">
            <h1 className="font-medium text-[16px] text-[#F8F8F8] underline">
              Absolutely Guaranteed.
            </h1>
            <p className="text-[14px] text-[#F8F8F8] pb-5">
              Every time. Any reason. Or we'll make it right.
            </p>
          </div>
          <div className="text-start mx-auto w-full max-w-[300px] space-y-3">
            <h1 className="font-semibold text-[14px] text-white">
              Let Us Help
            </h1>
            <ul className="list-none text-[14px] text-white space-y-1">
              <li className="hover:underline">My Account</li>
              <li className="hover:underline">Shipping</li>
              <li className="hover:underline">Contact & Support</li>
              <li className="hover:underline">All Products</li>
              <li className="hover:underline">Ideas & Advice</li>
              <li className="hover:underline">Reseller Program</li>
              <li className="hover:underline">Accessibility</li>
            </ul>
          </div>
          <div className="text-start mx-auto w-full max-w-[300px] space-y-3">
            <h1 className="font-semibold text-[14px] text-white">
              Our Company
            </h1>
            <ul className="list-none text-[14px] text-white space-y-1">
              <li className="hover:underline">About us</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">For Investors</li>
              <li className="hover:underline">For Media</li>
              <li className="hover:underline">Sustainability</li>
              <li className="hover:underline">Accessibility</li>
              <li className="hover:underline">Do Not Sell or Share My Info</li>
            </ul>
          </div>
          <div className="mx-auto flex gap-2 w-full max-w-[390px] pt-8 md:pt-0">
            <img src={fb} className="hover:invert transition-colors" alt="" />
            <img src={x} className="hover:invert transition-colors" alt="" />
            <img
              src={insta}
              className="hover:invert transition-colors"
              alt=""
            />
            <img
              src={pinterest}
              className="hover:invert transition-colors"
              alt=""
            />
            <img
              src={youtube}
              className="hover:invert transition-colors"
              alt=""
            />
            <img
              src={wordpress}
              className="hover:invert transition-colors"
              alt=""
            />
            <img
              src={linkedin}
              className="hover:invert transition-colors"
              alt=""
            />
            <img
              src={network}
              className="hover:invert transition-colors"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-black bg-cover flex justify-between w-full py-6 px-5">
        <div className="space-y-2">
          <ul className="list-none flex text-white gap-3 font-light md:flex-row flex-col">
            <li className="underline hover:no-underline">1.866.207.4955</li>
            <li className="underline hover:no-underline">Home</li>
            <li className="underline hover:no-underline">
              Privacy and Cookie Policy
            </li>
            <li className="underline hover:no-underline">
              Terms and Conditions
            </li>
            <li className="underline hover:no-underline">Legal Notice</li>
          </ul>
          <p className="text-white font-light text-[11px]">
            A CIMPRESS company © 2001-2024. All rights reserved.
          </p>
          <p className="text-white font-light text-[11px]">
            Unless stated otherwise, prices are exclusive of delivery and
            product options.
          </p>
        </div>

        <div className="flex space-x-2">
          <img src={country} className="w-full max-w-[]" alt="" />
          <img src={arrow} alt="" />
        </div>
      </div>

      {/* <div className="products border border-red-600 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts &&
          filteredProducts.map((product, idx) => {
            return (
              <div
                key={idx}
                className="product h-[300px] bg-white drop-shadow-2xl p-2 border"
              >
                <img
                  src={product.img}
                  alt=""
                  className="w-full h-[70%] object-cover p-2"
                />
                <div className="m-2 p-2">
                  <p className="text-sm">{product.description}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </section>
  );
};

export default Main;
