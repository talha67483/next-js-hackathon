"use client";
import React from "react";
import Card1 from "../Cards/Card1";
import SaleButton from "../Buttons/SaleButton";
import NewButton from "../Buttons/NewButton";
import { useState } from "react";

const About = () => {
  const [all, setAll] = useState(false);

  return (
    <div className=" w-full min-h-[461px]border-2 border-black  ">
      <div className=" w-full h-[44px] sm:my-10 my-12  ">
        <h1 className=" w-[188px] h-[35px] text-[32px] font-semibold sm:mx-16 xl:mx-60 mx-auto    ">
          All Products
        </h1>
      </div>
      <div className=" flex  sm:space-x-1 xl:mx-60 xl:space-x-8 sm:flex-row flex-col space-y-10 sm:space-y-0  items-center  ">
        {" "}
        <Card1
          Img="/images/card-1.svg"
          price=""
          text="Library Stool Chair"
          discount="$20"
          newBtn={<NewButton />}
        />
        <Card1
          Img="/images/card-2.svg"
          price="$39"
          text="Library Stool Chair"
          discount="$20"
          saleBtn={<SaleButton />}
        />
        <Card1
          Img="/images/card-3.svg"
          price=""
          text="Library Stool Chair"
          discount="$20"
        />
        <Card1
          Img="/images/card-4.svg"
          price=""
          text="Library Stool Chair"
          discount="$20"
        />
      </div>

      {all && (
        <div>
          <div className=" flex  sm:space-x-1 xl:mx-60 xl:space-x-8 my-20 sm:flex-row flex-col space-y-10 sm:space-y-0 items-center ">
            {" "}
            <Card1
              Img="/images/card-6.svg"
              price=""
              text="Library Stool Chair"
              discount="$20"
              newBtn={<NewButton />}
            />
            <Card1
              Img="/images/02.svg"
              price="$39"
              text="Library Stool Chair"
              discount="$20"
              saleBtn={<SaleButton />}
            />
            <Card1
              Img="/images/card-img-3.svg"
              price=""
              text="Library Stool Chair"
              discount="$20"
            />
            <Card1
              Img="/images/card-1.svg"
              price=""
              text="Library Stool Chair"
              discount="$20"
            />
          </div>
        </div>
      )}
      <div className=" text-center  my-10 sm:hidden   ">
        <button
          onClick={() => {
            setAll(!all);
          }}
          className=" w-32 h-10 rounded-md text-white bg-[#029FAE]  shadow-xl "
        >
          {all ? "View Less" : "View All"}
        </button>
      </div>

      <div className=" sm:inline-block hidden ">
        <div className=" flex  sm:space-x-1 xl:mx-60 xl:space-x-8 my-20 ">
          {" "}
          <Card1
            Img="/images/card-6.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
            newBtn={<NewButton />}
          />
          <Card1
            Img="/images/02.svg"
            price="$39"
            text="Library Stool Chair"
            discount="$20"
            saleBtn={<SaleButton />}
          />
          <Card1
            Img="/images/card-img-3.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
          />
          <Card1
            Img="/images/card-1.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
          />
        </div>
        <div className=" flex  sm:space-x-1 xl:mx-60 xl:space-x-8 my-20 ">
          {" "}
          <Card1
            Img="/images/card-img-1.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
            newBtn={<NewButton />}
          />
          <Card1
            Img="/images/card-2.svg"
            price="$39"
            text="Library Stool Chair"
            discount="$20"
            saleBtn={<SaleButton />}
          />
          <Card1
            Img="/images/card-3.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
          />
          <Card1
            Img="/images/card-7.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
