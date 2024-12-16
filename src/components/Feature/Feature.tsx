import React from "react";
import Card4 from "../Cards/Card4";

const Feature = () => {
  return (
    <div className=" w-full xl:w-[1447px] min-h-[409px] my-20 sm:my-0 ">
      <div className=" flex sm:flex-row flex-col justify-between ">
        <h1 className="  w-full text-center sm:text-start sm:w-[401px] h-[34px] font-bold text-[28px] leading-[33.89px] sm:ml-6   tracking-widest uppercase   ">
          Featured Products
        </h1>
        <button className="w-[69px] h-[22px] mx-auto sm:mx-0 leading-3 my-10 sm:my-0  font-bold text-[18px] border-b-[1px] border-black py-5  sm:mr-10  ">
          View all
        </button>
      </div>
      <div className=" sm:flex xl:space-x-10 space-x-2 mx-auto flex-col sm:flex-row w-full hidden    ">
        <Card4
          text="Library Stool Chair"
          Img="/images/card-img-3.svg"
          price={99}
        />
        <Card4 text="Library Stool Chair" Img="/images/card-1.svg" price={99} />
        <Card4 text="Library Stool Chair" Img="/images/card-7.svg" price={99} />
        <Card4 text="Library Stool Chair" Img="/images/card-3.svg" price={99} />
        <Card4 text="Library Stool Chair" Img="/images/card-5.svg" price={99} />
      </div>
      <div className=" flex justify-center ">
        <div className=" sm:hidden inline-block   ">
          <Card4
            text="Library Stool Chair"
            Img="/images/card-img-3.svg"
            price={99}
          />
          <Card4
            text="Library Stool Chair"
            Img="/images/card-1.svg"
            price={99}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
