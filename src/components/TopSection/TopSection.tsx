import React from "react";
import Card2 from "../Cards/Card2";

const TopSection = () => {
  return (
    <section className=" w-full  min-h-[508px]   ">
      <div className=" w-full h-[44px]  ">
        <h1 className=" w-[286px] h-[35px] text-[32px] mt-20  text-[#272343] font-semibold leading-[35.2px] sm:mx-10 mx-auto    xl:mx-80 ">
          Featured Products
        </h1>
      </div>
      <div className=" flex xl:mx-72 sm:my-10 flex-col space-y-10 sm:space-y-0  sm:flex-row ">
        <Card2
          products="  ,584 Products"
          Img="/images/card-5.svg"
          heading="  Wing Chair"
        />
        <Card2
          products="  ,584 Products"
          Img="/images/card-6.svg"
          heading="  Wing Chair"
        />
        <Card2
          products="  ,584 Products"
          Img="/images/card-7.svg"
          heading="  Wing Chair"
        />
      </div>
    </section>
  );
};

export default TopSection;
