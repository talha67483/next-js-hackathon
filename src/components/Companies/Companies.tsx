import Image from "next/image";
const Companies = () => {
  return (
    <div className=" xl:w-[1321px] min-h-[139px] w-full  xl:mx-auto mt-10 ">
      <ul className="   flex  sm:flex-row flex-col sm:space-x-20     xl:space-x-28 items-center  ">
        <li className=" sm:ml-16 xl:ml-0 ">
          <Image src={"/images/Logo-1.svg"} alt=" " width={85} height={87} />
        </li>
        <li>
          <Image src={"/images/Logo-2.svg"} alt=" " width={107} height={109} />
        </li>
        <li>
          <Image src={"/images/Logo-3.svg"} alt=" " width={135} height={139} />
        </li>
        <li>
          <Image src={"/images/Logo-4.svg"} alt=" " width={63} height={65} />
        </li>
        <li>
          <Image src={"/images/Logo-5.svg"} alt=" " width={98} height={101} />
        </li>
        <li>
          <Image src={"/images/Logo-6.svg"} alt=" " width={113} height={87} />
        </li>
        <li>
          <Image src={"/images/Logo-7.svg"} alt=" " width={84} height={87} />
        </li>
      </ul>
    </div>
  );
};

export default Companies;
