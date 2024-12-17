import React from "react";
import Card1 from "../Cards/Card1";
import NewButton from "../Buttons/NewButton";
import SaleButton from "../Buttons/SaleButton";

const OurProducts = () => {
  return (
    <section className=" w-full min-h-[919px]  xl:w-[1320px]  mx-auto ">
      <div className=" sm:ml-[550px] ml-36   ">
        <h1 className=" sm:w-[205px] h-[35px]  text-[#272343] text-[32px] font-semibold ">
          Our Products
        </h1>
      </div>
      <div className=" sm:mr-10 mt-20 ">
        <div className=" flex sm:flex-row flex-col   items-center   space-y-10 sm:space-y-0 w-full xl:w-[1321px] mt-5 sm:mx-2 space-x-5  xl:space-x-5   xl:mx-auto ">
          <div></div>
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
      </div>
      <div className=" flex justify-center my-20 sm:hidden   ">
        <button className=" w-28 h-10 bg-[#029FAE] rounded-lg text-white hover:bg-[#33aab5]  ">
          View All
        </button>
      </div>
      <div className=" sm:mr-10  hidden md:flex   ">
        <div className=" flex sm:flex-row flex-col   items-center   space-y-10 sm:space-y-0 w-full xl:w-[1321px] mt-5 sm:mx-2 space-x-5  xl:space-x-5   xl:mx-auto ">
          <div></div>
          <Card1
            Img="/images/card-img-1.svg"
            price=""
            text="Library Stool Chair"
            discount="$20"
            newBtn={<NewButton />}
          />
          <Card1
            Img="/images/card-img-2.svg"
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
    </section>
  );
};

export default OurProducts;
