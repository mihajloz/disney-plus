"use client";
import { useState, ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#13151d] mb-[16px] tracking-[0.2px]">
      <button
        className="flex items-center justify-between w-full cursor-pointer p-[24px]"
        onClick={handleClick}
      >
        <span className="text-[15px] md:text-[18px] lg:text-[20px] leading-[25px] md:leading-[28px]">
          {title}
        </span>
        <span className="text-[40px] leading-[32px]">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-[24px] pb-[24px] text-[#c0c0c0] md:text-[18px] lg:text-[20px] text-left">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
