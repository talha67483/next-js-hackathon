import React from "react";
import Image from "next/image";

interface Props {
  Img: string;
}

const Card3 = ({ Img }: Props) => {
  return (
    <div className=" w-[200px] h-[200px]  rounded-lg ">
      <Image src={Img} alt=" " width={200} height={200} />
    </div>
  );
};

export default Card3;
