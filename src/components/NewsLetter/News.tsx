import React from "react";
import { Roboto } from "next/font/google";
import Card3 from "../Cards/Card3";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const News = () => {
  return (
    <section className=" w-full h-[754px] bg-[#1E28320D] text-[#272343]   ">
      <div className="  w-full  md:w-[760px] h-[165px]  mx-auto md:py-16 py-10  ">
        <h1
          className={` md:w-[707px] h-[59px] w-full font-medium text-[30px] text-center  md:text-[50px] leading-[58.59px] md:mx-auto   capitalize ${roboto.className} `}
        >
          Or subscribe to the newsletter{" "}
        </h1>
        <div className=" flex items-center mt-16 ml-5 ">
          <input
            type="text"
            placeholder="Email address..."
            className="   w-full  sm:w-[643px] h-[32px] border-b-2 border-black bg-[#d6dade0d]  "
          />
          <button className=" w-[91px] h-[32px] border-b-2 text-[#1E2832] border-black mx-5 leading-[22px] ">
            SUBMIT
          </button>
        </div>
      </div>
      <div className=" w-full xl:w-[1324px] min-h-[319px]  my-32 mx-auto  ">
        <h1
          className={` md:w-[1013px] h-[59px] w-full text-[24px]   sm:text-[32px] text-center md:text-[50px] font-medium ${roboto.className} mx-auto   `}
        >
          Follow products and discounts on Instagram
        </h1>
        <div className="  flex  items-end   mt-20     xl:space-x-6">
          <div></div>
          <div className=" mb-4 w-[186px]  mx-auto h-[186px] rounded-lg ">
            <Image
              src={"/images/card-6.svg"}
              alt=" "
              width={186}
              height={186}
            />{" "}
          </div>{" "}
          <div className=" md:flex  space-x-6    mb-5   hidden   ">
            <Card3 Img="/images/card-5.svg" />
            <Card3 Img="/images/card-2.svg" />
            <Card3 Img="/images/card-1.svg" />
            <Card3 Img="/images/card-3.svg" />
            <Card3 Img="/images/card-7.svg" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
