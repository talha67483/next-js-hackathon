import React from "react";
import Image from "next/image";
import Cards5 from "@/components/Cards/Cards5";

const page = () => {
  return (
    <section>
      <div className=" w-full flex justify-center  sm:gap-7 sm:flex-row flex-col items-center ">
        <div className=" w-[350px] h-[330px]    sm:w-[540px] xl:w-[672px]  sm:h-[478px]  bg-[#007580] mt-[93px]  ">
          <div className=" w-[310px] sm:w-[395px] sm:h-[156px] xl:w-[495px] xl:h-[161px]  mt-[44px] ml-[44px] xl:mt-[64px] xl:ml-[64px]  ">
            <h1 className=" w-[280px]  sm:w-[325px] h-[39px] font-bold sm:text-[32px] text-[26px]  leading-[38.76px] text-[#FFFFFF] ">
              About Us - Comforty
            </h1>
            <p className=" w-[280px]      sm:pt-6  sm:w-[395px] h-[110px] xl:w-[495px] font-normal text-[#FFFFFF] text-[15px]  sm:text-[18px] leading-[22px] mt-2 ">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.{" "}
            </p>
          </div>
          <button className=" mt-16 ml-20  w-[179px] h-[56px] py-[16px] px-[32px] bg-[#F9F9F926] xl:mt-[149px] sm:mt-[176px]  hover:bg-[#165a60]    sm:ml-[49px] text-[#FFFFFF] leading-[24px]  ">
            View collection
          </button>
        </div>
        <div className=" w-[350px] h-[330px]   sm:w-[520px] xl:w-[619px] sm:h-[478px] mt-[93px] relative">
          <Image
            src="/images/card-1.svg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h1 className=" mt-24 text-[25px] w-full text-center   mx-auto sm:w-[501px] h-[35px] font-semibold sm:text-[32px] leading-[35.2px] text-[#272343] ">
        What makes our Brand Different
      </h1>
      <div className=" flex justify-center items-center sm:flex-row flex-col space-y-5 sm:space-y-0 my-10 space-x-6  ">
        <div></div>
        <Cards5
          text="  Order before 3pm and get your order the next day as standard"
          heading="Next day as standard"
          Img="/images/Delivery.svg"
        />
        <Cards5
          text="  Handmade crafted goods made with real passion and craftmanship"
          heading="Made by true artisans"
          Img="/images/Delivery-2.svg"
        />
        <Cards5
          text=" For our materials and quality you won&rsquo;t find better prices anywhere"
          heading="Unbeatable prices"
          Img="/images/Purchase.svg"
        />
        <Cards5
          text=" We use 100% recycled to ensure our footprint is more manageable "
          heading="Recycled packaging"
          Img="/images/Sprout.svg"
        />
        <div></div>
      </div>
      <h1 className=" w-full  text-center   mt-20  sm:mx-6 xl:mx-80 sm:w-[332px] h-[35px] font-semibold text-[32px] leading-[35.2px] text-[#272343] ">
        Our Popular Products{" "}
      </h1>
      <div className=" xl:mx-80  mt-8 flex  space-x-6 justify-center flex-col space-y-7 sm:space-y-0 sm:flex-row items-center ">
        <div className=" w-[350px]   xl:w-[630px] sm:w-[550px] sm:h-[456px] xl:h-[462px]   ">
          <div className=" w-[350px] sm:w-[550px]    xl:w-[630px] h-[375px] relative  ">
            <Image
              src={"/images/Large-1.svg"}
              alt="Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className=" mt-6 space-y-2 ">
            <h1 className=" w-[220px] h-[28px] text-[20px]  text-[#2A254B] leading-[28px] ">
              The Poplar suede sofa
            </h1>
            <h2 className=" w-[61px] h-[27px] text-[18px] leading-[27px] text-[#2A254B] ">
              $99.00
            </h2>
          </div>
        </div>
        {/* {---------------------} */}
        <div className=" w-[305px] h-[462px]     ">
          <div className=" w-[305px] h-[375px] relative  ">
            <Image
              src={"/images/Parent.svg"}
              alt="Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className=" mt-6 space-y-2 ">
            <h1 className=" w-[220px] h-[28px] text-[20px]  text-[#2A254B] leading-[28px] ">
              The Dandy chair
            </h1>
            <h2 className=" w-[61px] h-[27px] text-[18px] leading-[27px] text-[#2A254B] ">
              $99.00
            </h2>
          </div>
        </div>
        {/* {------------------} */}
        <div className=" w-[305px] h-[462px]     ">
          <div className=" w-[305px] h-[375px] relative  ">
            <Image
              src={"/images/about-1.svg"}
              alt="Image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className=" mt-6 space-y-2 ">
            <h1 className=" w-[220px] h-[28px] text-[20px]  text-[#2A254B] leading-[28px] ">
              The Dandy chair
            </h1>
            <h2 className=" w-[61px] h-[27px] text-[18px] leading-[27px] text-[#2A254B] ">
              $99.00
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
