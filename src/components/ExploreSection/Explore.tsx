import Image from "next/image";

const Explore = () => {
  return (
    <section className="xl:w-[1320px] xl:mx-auto xl:my-36 my-20 w-full h-[648px]  flex">
      <div className="w-full sm:w-[45%] h-full mx-4 ">
        <Image
          src="/images/item-1.svg"
          alt="card"
          width={648}
          height={648}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:flex sm:flex-wrap w-[55%] space-x-2 ml-5 space-y-2 h-full hidden sm:ml-8 xl:ml-10 ">
        <div></div>
        <div className=" w-full sm:w-[312px] h-[312px] ">
          <Image
            src="/images/01.svg"
            alt="Logo"
            width={312}
            height={312}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="  w-full sm:w-[312px] h-[312px] ">
          <Image
            src="/images/20.svg"
            alt="Logo"
            width={312}
            height={312}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="  w-full sm:w-[312px] h-[312px]  ">
          <Image
            src="/images/02.svg"
            alt="Logo"
            width={312}
            height={312}
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" w-full sm:w-[312px] h-[312px]">
          <Image
            src="/images/card-3.svg"
            alt="Logo"
            width={312}
            height={312}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
