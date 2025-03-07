import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const page = async () => {
  const impData = await client.fetch(`*[_type=="products"][0..4]{
  _id,
  title,
  price,
 "imag_url":image.asset->url,
  inventory,
  }
`);

  return (
    <div>
      {impData.map((val: any, idx: any) => {
        return (
          <div key={idx} className=" text-[#212121] ">
            <h1> {val.id} </h1>
            <h1> {val.title} </h1>
            <h1> {val.price} </h1>
            <h1> {val.inventory} </h1>
            <Image
              src={`${val.imag_url}`}
              alt="Image"
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default page;
