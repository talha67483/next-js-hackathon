import React from "react";
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
    <div className=" flex  flex-col sm:flex-row sm:space-x-10 sm:mt-10 ">
      {faqs.map((val, idx) => (
        <div className=" space-y-4 sm:space-y-5  mt-5 xl:mt-0 " key={idx}>
          <div className=" sm:w-[580px] sm:h-[140px] xl:w-[648px] xl:h-[170px]  collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">{val.qus}</div>
            <div className="collapse-content">
              <p> {val.ans} </p>
            </div>
          </div>
          <div className="  sm:w-[580px] sm:h-[140px]  xl:w-[648px] xl:h-[170px]   collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">{val.qus1}</div>
            <div className="collapse-content">
              <p>{val.ans}</p>
            </div>
          </div>
          <div className=" sm:w-[580px] sm:h-[140px] xl:w-[648px] xl:h-[170px]   collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">{val.qus2}</div>
            <div className="collapse-content">
              <p>{val.ans}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
