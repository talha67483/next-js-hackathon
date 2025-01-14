"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

const Navbar = () => {
  const [menue, setMenue] = useState(false);

  const clickMenue = () => {
    setMenue(!menue);
  };

  return (
    <nav>
      <div className="  hidden w-full h-[45px] bg-[#272343] md:flex  justify-between   items-center  ">
        <div className=" xl:w-[255px] h-[16px] flex space-x-2 ml-20 xl:ml-52  ">
          <Image
            src={"/images/check 1.svg"}
            alt="Check"
            width={16}
            height={16}
          />
          <h1 className=" xl:w-[231px] h-[14px]  text-[13px] font-normal text-[#FFFFFF] leading-[14.3px] opacity-[70%]  ">
            Free shipping on all orders over $50
          </h1>
        </div>
        <div>
          <ul className=" w-[202px] h-[17px] opacity-[70%] flex text-[#FFFFFF] text-center text-[13px] space-x-4 mr-20 xl:mr-52 cursor-pointer ">
            <li className=" flex items-center space-x-1 ">
              <h3>Eng</h3>
              <div></div>
              <IoIosArrowDown />{" "}
            </li>
            <Link href={"/faqs"}>
              <li>Faqs</li>
            </Link>
            <li className=" flex items-center space-x-1 ">
              <div>
                <CiCircleAlert className=" text-xl " />
              </div>
              <h3>Need Help</h3>
            </li>
          </ul>
        </div>
      </div>
      {/* -------------------------- */}

      <div className=" w-full h-[84px] bg-[#F0F2F3] flex justify-between items-center    ">
        <Link href={"#"}>
          <div className=" ml-5   sm:ml-20 xl:ml-48  ">
            <Image src={"images/Logo.svg"} alt="Logo" width={166} height={40} />
          </div>
        </Link>

        <Link href={"cart"}>
          <div className=" mr-20 xl:m-52 md:inline-block hidden ">
            <Image
              src={"/images/cart-logo.svg"}
              alt="Cart "
              width={120}
              height={44}
            />
          </div>
        </Link>

        <div
          className=" mr-5 md:hidden inline-block  text-black"
          onClick={clickMenue}
        >
          <a href="#" className=" text-4xl  ">
            &#8801;
          </a>
        </div>
      </div>
      {menue && (
        <div className=" sm:hidden bg-white text-[#272343] text-[20px] ">
          <ul
            className={` ${inter.className} my-5 flex space-x-6 justify-center`}
          >
            <li>
              <Link href={"/"} onClick={clickMenue}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"shop"} onClick={clickMenue}>
                {" "}
                Shop
              </Link>
            </li>
            <li>
              <Link href={"product"} onClick={clickMenue}>
                {" "}
                Product
              </Link>
            </li>
            <li>
              <Link href={"pages"} onClick={clickMenue}>
                {" "}
                Pages
              </Link>
            </li>
            <li>
              <Link href={"about"} onClick={clickMenue}>
                {" "}
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* ---------------------------- */}

      <div className=" w-full h-[74px] sm:flex justify-between items-center border-b-[1px] border-[#E1E3E5] hidden    ">
        <ul className=" w-[339px] h-[15px]  text-[14px] font-medium  text-[#636270] flex space-x-7  leading-[15.4px] sm:ml-16 xl:ml-48  ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"shop"}> Shop</Link>
          </li>
          <li>
            <Link href={"product"}> Product</Link>
          </li>
          <li>
            <Link href={"pages"}> Pages</Link>
          </li>
          <li>
            <Link href={"about"}> About</Link>
          </li>
        </ul>

        <div className=" w-[168px] h-[15px]  space-x-2 leading-[15.4px] sm:mr-10 xl:mr-48  ">
          <Link href={"/contact "}>
            <span className=" w-[57px] h-[15px] text-[#636270] text-[14px]  ">
              Contact:
            </span>
          </Link>
          <span className=" w-[103px] h-[15px] text-[#272343] text-[14px]  ">
            (808) 555-0111
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
