import React from "react";
import Image from "next/image";

interface Props {
  heading: string;
  text: string;
  Img: string;
}

const Cards5 = ({ heading, text, Img }: Props) => {
  return (
    <div className=" w-[309.45px] h-[244px]  bg-[#F9F9F9] flex justify-center items-center ">
      <div className="  w-[213.45px] h-[148px] ">
        <Image src={Img} alt="Delivery" width={24} height={24} />
        <h1 className=" min-w-[202px] h-[28px] text-[20px] leading-[28px] text-[#007580] my-2 ">
          {heading}
        </h1>
        <p className=" w-[213.45px] h-[72px]  text-[#007580] leading-[24px] ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Cards5;
