import React from "react";
import Image from "next/image";
import mandala from "@/public/svg/mandala.svg";
import Link from "next/link";
import Col from "react-bootstrap/Col";

const Circle = ({ text, link, icon }) => {
  return (
    <Col
      xs={4}
      lg={2}
      className="flex flex-col items-center justify-center justify-self-center self-start"
    >
      <Link href={link} className="no-underline">
        <div className="flex flex-col items-center ">
          <div className="relative group">
            <Image
              src={mandala}
              alt="Mandala"
              className="md:w-full h-full group-hover:rotate-45 duration-300 translation-[rotate]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-saf-red transform text-4xl md:text-7xl lg:text-6xl xl:text-7xl">
              {icon}
            </div>
          </div>
          <p className="font-libre font-bold text-xs md:text-xl text-saf-red">
            {text}
          </p>
        </div>
      </Link>
    </Col>
  );
};

export default Circle;
