import React from "react";
import { Roboto } from "next/font/google";
import Accordian from "@/components/Accordian/Accordian";
const helvetica = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Faqs = () => {
  return (
    <section
      className=" w-full xl:w-[1320px] h-[731px]  xl:mx-auto  mt-16 xl:mt-40 
    "
    >
      <div className=" w-full md:w-[771px] h-[101px]   mx-auto text-center ">
        <h1
          className={` ${helvetica.className} w-full text-[#333333] mx-auto  sm:w-[510px] h-[56px] font-bold sm:text-[48px] text-[32px] leading-[56px]   `}
        >
          Questions Looks Here
        </h1>
        <p className=" w-full md:w-[771px] h-[24px] text-[#4F4F4F] text-center leading-[20px]    sm:mt-5 text-[14px] sm:text-[16px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </div>

      <div className=" w-full xl:w-[1320px] min-h-[558px] xl:mx-auto sm:mt-20 mt-5   flex xl:space-x-[5px] sm:space-x-7 sm:flex-row flex-col   ">
        <div></div>
        <div className="  ">
          <Accordian />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Faqs;
