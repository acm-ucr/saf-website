import React from "react";
import Image from "next/image";
import mandala from "@/public/svg/mandala.svg";
import Col from "react-bootstrap/Col";

const Circle = ({ text, link, icon }) => {
  return (
    <Col
      xs={4}
      lg={2}
      className="flex flex-col items-center justify-center justify-self-center self-start"
    >
      {/* Directly use an <a> tag for external links with target="_blank" and rel="noopener noreferrer" */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline cursor-pointer"
      >
        <div className="flex flex-col items-center ">
          <div className="relative group">
            <Image
              src={mandala}
              alt="Mandala"
              width={100}
              height={100} // Specify height, adjust these as needed
              className="w-full h-full group-hover:rotate-45 duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center text-saf-red transform text-4xl md:text-7xl lg:text-6xl xl:text-7xl">
              {icon}
            </div>
          </div>
          <p className="font-libre font-bold text-xs md:text-xl text-saf-red">
            {text}
          </p>
        </div>
      </a>
    </Col>
  );
};

export default Circle;
