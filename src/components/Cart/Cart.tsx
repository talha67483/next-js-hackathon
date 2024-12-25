import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <section className=" xl:mx-auto mt-24 w-full xl:w-[1609px] min-h-[632.89px]   flex sm:flex-row flex-col  justify-between ">
      <div className="  w-full sm:w-[580px] h-[547.89px] xl:w-[1100px]  sm:mx-10 my-4 sm:my-10 ">
        <h1 className=" font-medium text-[22px] leading-[33px] w-[55px] h-[33px] mx-4 text-[#111111] ">
          Bag
        </h1>
        <div className=" w-full  h-[211px] xl:w-[933px] flex   ">
          <div className=" my-7 ">
            <Image
              src={"/images/card-3.svg"}
              alt=" Logo"
              width={150}
              height={150}
            />
          </div>
          <div className="      ">
            <div>
              <h1
                className=" w-[141px] h-[21px] font-normal text-[16px] leading-[20.8px]  text-[#272343] mt-7   mx-5
             "
              >
                Library Stool Chair
              </h1>
              <p
                className=" w-[235px] h-[28px] text-[15px] font-normal leading-[28px] text-[#757575] mt-6
            mx-5  "
              >
                Ashen Slate/Cobalt Bliss
              </p>
              <div className=" w-[235px] h-[28px] flex   justify-center ">
                <span className=" w-[97px] h-[28px]  ">
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] ">
                    Size
                  </span>
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] mx-2 ">
                    L
                  </span>
                </span>
                <span className=" w-[97px] h-[28px]  ">
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] ">
                    Quantity
                  </span>
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] mx-2 ">
                    1
                  </span>
                </span>
              </div>
              <div
                className=" w-full flex space-x-3 mt-7 
              mx-5
            "
              >
                <span>
                  <FaRegHeart className=" text-2xl cursor-pointer hover:text-pink-600 hover:text-3xl hover:duration-200 duration-300  " />
                </span>
                <span>
                  <RiDeleteBin6Line className=" text-2xl cursor-pointer hover:text-3xl duration-300 hover:duration-300  " />
                </span>
              </div>
            </div>
          </div>
          <div className=" text-[15px] font-normal leading-[28px] my-10 xl:ml-80 sm:ml-10  ">
            MRP: $99
          </div>
        </div>
        <div className=" w-full  h-[211px] xl:w-[933px] flex mt-4   ">
          <div className=" my-7 ">
            <Image
              src={"/images/card-5.svg"}
              alt=" Logo"
              width={150}
              height={150}
            />
          </div>
          <div className="      ">
            <div>
              <h1
                className=" w-[141px] h-[21px] font-normal text-[16px] leading-[20.8px]  text-[#272343] mt-7   mx-5
             "
              >
                Library Stool Chair
              </h1>
              <p
                className="w-[235px] h-[28px] text-[15px] font-normal leading-[28px] text-[#757575] mt-6
            mx-5  "
              >
                Ashen Slate/Cobalt Bliss
              </p>
              <div className=" w-[235px] h-[28px] flex  justify-center ">
                <span className=" w-[97px] h-[28px]  ">
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] ">
                    Size
                  </span>
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] mx-2 ">
                    L
                  </span>
                </span>
                <span className=" w-[97px] h-[28px]  ">
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] ">
                    Quantity
                  </span>
                  <span className=" w-[30px] h-[28px] font-normal text-[15px] leading-[28px] text-[#757575] mx-2 ">
                    1
                  </span>
                </span>
              </div>
              <div
                className=" w-full flex space-x-3 mt-7 
              mx-5
            "
              >
                <span>
                  <FaRegHeart className=" text-2xl cursor-pointer hover:text-pink-700 hover:text-3xl hover:duration-200 duration-300  " />
                </span>
                <span>
                  <RiDeleteBin6Line className=" text-2xl cursor-pointer hover:text-3xl duration-300 hover:duration-300  " />
                </span>
              </div>
            </div>
          </div>
          <div className=" text-[15px] font-normal leading-[28px] my-10 xl:ml-80 sm:ml-10  ">
            MRP: $99
          </div>
        </div>
      </div>
      {/* {---------------------------------} */}
      <div className=" w-full sm:w-[280px] xl:w-[350.67px  h-[340px] sm:h-[295px] px-10 sm:px-0 mt-10 sm:mt-24  sm:pl-1 xl:pl-2 sm:my-28 sm:mr-28 xl:my-24 xl:mr-24 ">
        <h1 className=" w-[96px] h-[33px] font-medium text-[21px]  leading-[33px] text-[#111111]  ">
          Summary
        </h1>
        <div className="   sm:w-[268px] xl:w-[334.67px] h-[28px] flex justify-between mt-4   ">
          <h1 className=" text-[15px] font-normal leading-[28px]  ">
            Subtotal
          </h1>
          <h2 className=" text-[14px] font-medium leading-[24px]  ">$198.00</h2>
        </div>
        <div className="   sm:w-[268px] xl:w-[334.67px] h-[28px] flex justify-between mt-2  ">
          <h1 className=" text-[15px] font-normal leading-[28px]  ">
            Estimated Delivery & Handling
          </h1>
          <h2 className=" text-[15px] font-medium leading-[24px]  ">Free</h2>
        </div>
        <div className=" xl:w-[340.38px] sm:w-[266px] h-[62px]  border-y-[1px] border-black mt-3    ">
          <div className="   sm:w-[268px] xl:w-[334.67px] h-[28px] flex justify-between mt-4  ">
            <h1 className=" text-[15px] font-normal leading-[28px]  ">
              Total{" "}
            </h1>
            <h2 className=" text-[15px] font-medium leading-[24px]  ">
              $198.00
            </h2>
          </div>
        </div>
        <div className=" w-[183px] px-6 mx-auto sm:mx-0  sm:w-[268px] h-[60px] xl:w-[334.67px]  bg-[#029FAE]  mt-10 hover:bg-[#37b7c3]     rounded-[30px] text-white leading-3 py-[18px] sm:px-[70px] xl:px-[100.8px] ">
          <h1 className="  w-[180px]  sm:w-[133px]  h-[24px] font-medium  sm:text-[15px] leading-[24px] text-[#FFFFFF]    ">
            Member Checkout
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Cart;
