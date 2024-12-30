import Feature from "@/components/Feature/Feature";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const page = () => {
  return (
    <>
      <section className=" w-full min-h-screen flex justify-center sm:gap-14 sm:my-32  sm:flex-row   flex-col sm:flex-nowrap flex-wrap   ">
        <div className=" sm:w-[675px] sm:h-[607px] w-[300px] h-[353px] mx- mt-20 sm:mt-0  mx-auto  ">
          <Image
            src={"/images/card-2.svg"}
            alt=" Logo"
            width={675}
            height={607}
            className=" mx-5 "
          />
        </div>
        <div className=" mx-auto ">
          <h1 className=" w-full sm:w-[541px]  text-center sm:mt-0 sm:text-start h-[132px] font-bold text-[42px]  sm:text-[60px]  leading-[66px]  ">
            Library Stool Chair
          </h1>
          <button className=" w-[144px] h-[44px] bg-[#029FAE] sm:mx-0 mx-20 rounded-[100px] text-white sm:mt-10 ">
            $20.00 USD
          </button>
          <div className="  w-full  sm:w-[521px] border-[1px] border-[#D9D9D9] my-14 "></div>
          <p className=" w-full  sm:mx-0 text-center sm:w-[543px] h-[101px] text-[22px] font-normal leading-[33px] opacity-[60%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <button className=" flex justify-center items-center text-2xl mx-auto sm:mx-0  w-[212px] h-[63px] rounded-[8px] bg-[#029FAE] text-white mt-20  sm:my-10 hover:bg-[#32bdca]  ">
            {" "}
            <CiShoppingCart className=" text-4xl mr-2 " />
            Add To cart
          </button>
        </div>
      </section>
      <div className=" flex justify-center ">
        <Feature />
      </div>
    </>
  );
};

export default page;
