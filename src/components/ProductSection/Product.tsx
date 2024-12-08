import React from "react";
import Card1 from "../Cards/Card1";
import NewButton from "../Buttons/NewButton";
import SaleButton from "../Buttons/SaleButton";

const Product = () => {
  return (
    <section className=" w-full min-h-[461px]  ">
      <div className=" w-full h-[44px]  ">
        <h1 className=" w-[286px] h-[35px] text-[32px] mt-20  text-[#272343] font-semibold leading-[35.2px] sm:mx-10 mx-auto   xl:mx-80 ">
          Featured Products
        </h1>
      </div>
      <div className=" flex sm:flex-row flex-col   items-center   space-y-10 sm:space-y-0 w-full xl:w-[1321px] mt-5 sm:mx- space-x-5 xl:space-x-8   xl:mx-auto ">
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
    </section>
  );
};

export default Product;
