import { Poppins } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import Image from "next/image";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "600", "500", "700"],
});
const ContactPage: React.FC = () => {
  return (
    <section className=" w-full xl:w-[1440px] min-h-[1144px]   xl:mx-auto text-[#272343]   ">
      <div className=" flex flex-col items-center mt-10 xl:mt-28  ">
        <h1
          className={` ${popins.className} w-full text-center    sm:w-[405px] h-[54px] text-[26px] sm:text-[36px] font-semibold leading-[54px] `}
        >
          Get In Touch With Us{" "}
        </h1>
        <p
          className={`  ${popins.className} w-full sm:w-[644px] h-[48px] text-center text-[#9F9F9F] leading-[24px]`}
        >
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className=" w-full sm:w-[1058px] min-h-[923px]  sm:mt-20 sm:mx-auto mx-0  flex flex-col sm:flex-row    ">
        <div className=" w-full sm:w-[393px] h-[537px]   sm:mt-20 mt-24  sm:ml-3   ">
          <div className=" flex  ml-8 sm:ml-0   ">
            <FaLocationDot className=" text-3xl ml-10 mt-10 " />
            <div>
              <h1
                className={` ${popins.className} text-[24px] font-medium leading-[36px] ml-4 w-[99px] h-[36px] mt-14`}
              >
                Address
              </h1>
              <p className=" font-normal text-[16px] leading-[19.36px] w-[212px] h-[57px] ml-4  ">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className=" flex mt-5 ml-10 sm:ml-0 ">
            <FaPhone className=" text-3xl ml-8 mt-10 " />
            <div>
              <h1
                className={` ${popins.className} text-[24px] font-medium leading-[36px] ml-4 w-[99px] h-[36px] mt-14`}
              >
                Phone
              </h1>
              <p className=" font-normal text-[16px] leading-[19.36px] w-[212px] h-[57px] ml-4  ">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789{" "}
              </p>
            </div>
          </div>
          <div className=" flex mt-5 ml-8 sm:ml-0 ">
            <MdWatchLater className=" text-3xl ml-10 mt-10 " />
            <div>
              <h1
                className={` ${popins.className} text-[24px] font-medium leading-[36px] ml-4 w-[166px] h-[36px] mt-14`}
              >
                Working Time
              </h1>
              <p className=" font-normal text-[16px] leading-[19.36px] w-[212px] h-[76px] ml-4  ">
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-[635px] h-auto sm:h-[923px] sm:ml-4 flex flex-col items-center space-y-5  sm:space-y-10 px-4 sm:px-0">
          <div className=" w-full sm:w-[530px] h-auto sm:h-[121px] mt-8 sm:mt-24">
            <h1
              className={` w-full sm:w-[111.25px]  h-[24px] ${popins.className} font-medium leading-[24px]`}
            >
              Your name
            </h1>
            <input
              type="text"
              placeholder="Abc"
              className={` ${popins.className} w-full bg-white sm:w-[528.75px] border-[1px] border-[#9F9F9F] rounded-[10px] h-[52px] sm:h-[75px] px-4 sm:px-8 mt-2 sm:mt-5`}
            />
          </div>
          <div className=" w-full sm:w-[530px] h-auto sm:h-[121px]">
            <h1
              className={` w-full sm:w-[144.25px] h-[24px] ${popins.className} font-medium leading-[24px]`}
            >
              Email address
            </h1>
            <input
              type="text"
              placeholder="Abc@def.com"
              className={` ${popins.className} w-full bg-white sm:w-[528.75px] border-[1px] border-[#9F9F9F] rounded-[10px] h-[52px] sm:h-[75px] px-4 sm:px-8 mt-2 sm:mt-5`}
            />
          </div>
          <div className=" w-full sm:w-[530px] h-auto sm:h-[121px]">
            <h1
              className={` w-full sm:w-[75.25px] h-[24px] ${popins.className} font-medium leading-[24px]`}
            >
              Subject
            </h1>
            <input
              type="text"
              placeholder="This is an optional"
              className={` ${popins.className} w-full bg-white sm:w-[528.75px] border-[1px] border-[#9F9F9F] rounded-[10px] h-[52px] sm:h-[75px] px-4 sm:px-8 mt-2 sm:mt-5`}
            />
          </div>
          <div className=" w-full sm:w-[530px] h-auto sm:min-h-[121px]">
            <h1
              className={` w-full sm:w-[75.25px] h-[24px] ${popins.className} font-medium leading-[24px]`}
            >
              Message
            </h1>
            <textarea
              placeholder="Hi! I&lsquo;d like to ask about"
              className={` ${popins.className} w-full  bg-white sm:w-[528.75px] border-[1px] py-8 border-[#9F9F9F] rounded-[10px] h-[85px] sm:h-[120px] px-4 sm:px-8 mt-2 sm:mt-5`}
            />
          </div>
          <div className=" w-full flex justify-center sm:justify-start">
            <button
              className={` mt-8 sm:mt-16 ${popins.className} w-[237px] h-[55px] border-[1px] border-[#B88E2F] text-[#FFFFFF] bg-[#029FAE] rounded-[5px] hover:bg-[#43b6c1]`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full min-h-[270px] bg-[#F4F4F4]  mt-16 flex justify-center items-center ">
        <div className=" w-full sm:w-[1188px] min-h-[70px]  items-center      flex sm:space-x-32 space-y-20 sm:space-y-0  sm:flex-row flex-col ">
          <div></div>

          <div className=" w-full sm:w-[337px] h-[70px] flex justify-center      ">
            <Image
              src={"/images/Frame 5.svg"}
              alt=" Logo"
              width={300}
              height={200}
            />
          </div>
          <div className=" w-full sm:w-[328px] h-[70px] flex justify-center  ">
            <Image
              src={"/images/Frame 19.svg"}
              alt=" Logo"
              width={300}
              height={200}
            />
          </div>
          <div className=" w-full sm:w-[259px] h-[70px]  flex justify-center    ">
            <Image
              src={"/images/Frame 4.svg"}
              alt=" Logo"
              width={300}
              height={200}
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
