import Image from "next/image";
const Footer = () => {
  return (
    <footer className="  ">
      <div className="w-full min-h-[418px]  mt-28 flex items-center xl::space-x-28  sm:space-x-14 sm:flex-row flex-col   ">
        <div className=" w-[350px] h-[198px]  xl:ml-72  sm:ml-20  ">
          <div>
            <Image
              src={"/images/Logo.svg"}
              alt="Logo"
              width={168}
              height={40}
            />
          </div>
          <p className=" w-[350px] h-[72px] text-[16px] font-normal text-[#272343] leading-[24px] opacity-[60%]  my-5">
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
        <ul className=" w-[105px] min-h-[203px]   text-center space-y-3 ">
          <h1 className=" text-[16px] text-center font-medium leading-[15.4px] text-[#9A9CAA] my-5  ">
            Category
          </h1>
          <li>Sofa</li>
          <li>Armchair</li>
          <li>Wing Chair</li>
          <li>Desk Chair</li>
          <li>wooden Chair</li>
          <li>Park Bench</li>
        </ul>
        <ul className=" w-[166px] min-h-[108px]  text-center space-y-3  ">
          <h1 className=" text-[16px] text-center font-medium leading-[15.4px] text-[#9A9CAA] my-5  ">
            Support
          </h1>
          <li>Help & Support</li>
          <li>Tearms & Conditions</li>
          <li>Privacy Policy</li>

          <li>Help</li>
        </ul>

        <div className=" w-[424px] h-[142px] ">
          <h1 className="  w-[102px] h-[15px] text-[#9A9CAA] font-medium opacity-[80%] ">
            Newsletter
          </h1>
          <div>
            <input
              type="text"
              placeholder="Your email"
              className=" w-[285px] h-[45px] border-[1px] border-[#E1E3E5] rounded-md my-5 px-7  "
            />
            <button className=" w-[127px] h-[46px]  py-[14px] px-[24px] rounded-[8px] bg-[#029FAE] text-white text-center leading-[17.6px] ml-2  ">
              Subscribe
            </button>
          </div>
          <p className="  w-[424px] h-[46px] font-normal opacity-[60%] leading-[22px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
