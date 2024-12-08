import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

interface Props {
  Img: string;
  text: string;
  price?: string;
  discount: string;
  newBtn?: React.ReactElement;
  saleBtn?: React.ReactElement;
}
const Card1 = ({ Img, text, price, discount, newBtn, saleBtn }: Props) => {
  return (
    <div className="w-[312px] h-[377px]  rounded-xl relative overflow-hidden">
      <div className="relative">
        <Image
          src={Img}
          width={312}
          height={312}
          alt="Card"
          className="rounded-t-xl"
        />
        {newBtn}
        {saleBtn}
      </div>

      <div className=" flex justify-between items-center ">
        <div className="p-2 ">
          <h1 className="text-[16px] font-normal text-[#007580]">{text}</h1>

          <span className=" w-[35px] h-[20px] text-[18px] text-[#272343] font-semibold ">
            {discount}
          </span>
          <span className=" w-[27px] h-[15px] text-[14px] font-normal leading-[15.4px] text-[#9A9CAA] line-through  ">
            {price}
          </span>
        </div>

        <div className=" w-[44px] h-[44px]  rounded-[8px] hover:bg-[#029FAE] hover:text-white  ">
          <CiShoppingCart className=" text-4xl mx-1 my-1  " />
        </div>
      </div>
    </div>
  );
};

export default Card1;
