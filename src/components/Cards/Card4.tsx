import React from "react";
import Image from "next/image";
interface Props {
  text: string;
  Img: string;
  price: number;
}

const Card4 = ({ text, Img, price }: Props) => {
  return (
    <div className="w-[270px] h-[306px]  mt-16 ">
      <div>
        <Image src={Img} alt="Logo" width={270} height={263} />
      </div>
      <div className=" flex justify-between my-4 ">
        <p className=" ml-2 my-2 w-[141px] h-[21px] leading-[20.8px] font-normal text-[16px] text-[#272343] ">
          {text}
        </p>
        <h1 className=" font-bold text-[14px] leading-[16.94px] mr-4 my-2 ">
          ${price}
        </h1>
      </div>
    </div>
  );
};

export default Card4;
