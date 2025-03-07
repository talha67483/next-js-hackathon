import Image from "next/image";
const Footer = () => {
  return (
    <footer className="    ">
      <div className="w-full min-h-[418px] border-y-[1px]   text-[#272343] border-[#E1E3E5] my-10   mt-28 flex items-center xl:space-x-28 sm:space-x-10 sm:flex-row flex-col justify-center    ">
        <div className="  w-full sm:w-[350px] min-h-[198px]      ">
          <div className=" my-4  sm:my-0 ">
            <Image
              src={"/images/Logo.svg"}
              alt="Logo"
              width={168}
              height={40}
            />
          </div>
          <p className=" text-center sm:text-start w-full  sm:w-[350px] h-[72px]  text-[14px] sm:text-[16px] font-normal text-[#272343] leading-[24px] opacity-[60%] sm:mt-4 my-5  mt-20 ">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>
          <div>
            <Image
              src={"images/Social Links.svg"}
              alt="Logo"
              width={206}
              height={38}
            />
          </div>
        </div>
        <div
          className=" flex my-10 space-x-7 sm:space-x-14 xl:space-x-24
         "
        >
          <ul className=" w-[105px] min-h-[203px]    text-center space-y-2 ">
            <h1 className=" text-[16px] text-center font-medium leading-[15.4px] text-[#9A9CAA] my-3  ">
              Category
            </h1>
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>wooden Chair</li>
            <li>Park Bench</li>
          </ul>
          <ul className=" w-[166px] min-h-[108px]  text-center space-y-2  ">
            <h1 className=" text-[16px] text-center font-medium leading-[15.4px] text-[#9A9CAA] my-3  ">
              Support
            </h1>
            <li>Help & Support</li>
            <li>Tearms & Conditions</li>
            <li>Privacy Policy</li>

            <li>Help</li>
          </ul>
        </div>

        <div className=" w-full   sm:w-[424px] min-h-[142px] ">
          <h1 className="  w-[102px] mx-auto sm:mx-0 my-4  h-[15px] text-[#9A9CAA] font-medium opacity-[80%] ">
            Newsletter
          </h1>
          <div className=" flex items-center flex-col sm:flex-row    ">
            <input
              type="text"
              placeholder="Your email"
              className=" bg-white w-[285px] h-[45px] border-[1px] border-[#E1E3E5] rounded-md px-7  "
            />
            <button className=" w-[127px] h-[46px] mt-3 sm:mt-0 py-[14px] px-[24px] rounded-[8px] hover:bg-[#50b1ba]  bg-[#029FAE] text-white text-center leading-[17.6px] ml-2  ">
              Subscribe
            </button>
          </div>
          <p className=" w-full text-center  sm:text-start   sm:w-[424px] h-[46px] font-normal opacity-[60%] leading-[22px] sm:pt-4 pt-0  my-10 sm:my-0  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      <div className=" bg-white w-full h-[155px] flex sm:justify-between flex-col sm:flex-row items-center   mx-auto  text-center       ">
        <div className="   w-full sm:w-[341px] h-[21px] text-[14px] font-normal leading-[21px] text-[#9A9CAA] mt-10 sm:mt-24   py-4     sm:ml-12 xl:ml-52   ">
          @ 2021 - Blogy - Designed & Develop by{" "}
          <span className=" text-black ">Zakirsoft</span>
        </div>
        <div className="  w-full sm:w-[227px] h-[27px] sm:mr-10 xl:mr-52 mt-20 py-8       ">
          <Image
            src={"/images/Group-1.svg"}
            alt="payment"
            width={227}
            height={27}
            className="mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
