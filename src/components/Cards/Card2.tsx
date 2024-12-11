import Image from "next/image";
interface Props {
  Img: string;
  heading: string;
  products: string;
}

const Card2 = ({ Img, heading, products }: Props) => {
  return (
    <div className="relative w-[424px] h-[424px] mx-3 rounded-[10px] overflow-hidden">
      {/* Image */}
      <Image src={Img} alt="Card" width={424} height={424} />

      {/* Overlay */}
      <div className="absolute bottom-5 left-0 w-full h-[95px] bg-black bg-opacity-70 flex flex-col items-center    space-y-3  ">
        <h1 className=" text-[20px] leading-[22px] sm:ml-10  text-[#FFFFFF] font-medium  w-[384px] h-[22px] mt-5 ">
          {heading}
        </h1>
        <p className=" w-[376px] h-[15px] sm:ml-10 font-normal text-[14px] leading-[15.4px] text-[#FFFFFF] opacity-[70%]  ">
          {products}
        </p>
      </div>
    </div>
  );
};

export default Card2;