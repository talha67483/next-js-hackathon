import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className=" w-full min-h-[850px]  xl:w-[1321px] xl:mx-auto flex gap-32 sm:flex-row flex-col sm:justify-evenly sm:items-center ">
      <div className="  w-full sm:w-[557px] h-[337px]    ">
        <p className=" w-[177px] h-[14px] text-[14px] font-normal  text-[#272343] sm:mx-0 sm:mt-0  mx-10 mt-3  ">
          Welcome to chairy
        </p>
        <h1 className="  w-full sm:px-0  px-10 sm:w-[557px] h-[198px] sm:text-[60px] text-[48px]  font-bold text-[#272343] leading-[66px] my-5  ">
          Best Furniture Collection for your interior.
        </h1>
        <button className=" w-[171px] h-[52px] py-[12px] px-[24px] bg-[#029FAE] rounded-[8px] text-[#FFFFFF] hover:bg-[#34abb6] mt-8 ml-28 sm:ml-0   ">
          Shop Now <GoArrowRight className=" inline-block " />
        </button>
      </div>
      <div className=" sm:w-[434px] sm:h-[584] w-[340px] h-[450px] mx-auto sm:mx-0 ">
        <Image
          src={"/images/Hero-img.svg"}
          alt="Hero"
          width={434}
          height={584}
        />
      </div>
    </section>
  );
};

export default Hero;
