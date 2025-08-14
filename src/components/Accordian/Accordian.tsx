import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faqs {
  qus: string;
  qus1: string;
  qus2: string;
  ans: string;
}

const faqs: Faqs[] = [
  {
    qus: "What types of chairs do you offer?",
    qus1: "Do your chairs come with a warranty?",
    qus2: "Can I try a chair before purchasing?",

    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },

  {
    qus: "How can we get in touch with you?",
    qus1: "What will be delivered? And When?",
    qus2: "How do I clean and maintain my Comforty chair?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

const Accordian = () => {
  return (
    <div className=" flex  flex-col sm:flex-row sm:space-x-10 sm:mt-10  px-10 sm:px-0     ">
      {faqs.map((val, idx) => (
        <Accordion type="single" collapsible key={idx}>
          <AccordionItem value="item1">
            <AccordionTrigger> {val.qus} </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {" "}
              <p className=" text-[17px] w-[70%] leading-[22px] ">{val.ans}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger> {val.qus1} </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {" "}
              <p className=" text-[17px] w-[70%] leading-[22px] ">{val.ans}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger> {val.qus1} </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {" "}
              <p className=" text-[17px] w-[70%] leading-[22px] ">{val.ans}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Accordian;
