import React from "react";
import Image from "next/image";
import mandala from "../../../public/svg/board-mandala.svg";
import Col from "react-bootstrap/Col";

const Board = ({ position, name, image }) => {
  return (
    <Col
      xs={6}
      md={5}
      lg={4}
      className="flex flex-col items-center justify-center p-1 justify-self-center self-start "
    >
      <div className="flex flex-col justify-center items-center relative group">
        <Image
          src={mandala}
          alt="Mandala"
          className="w-full h-full z-1 opacity-20 group-hover:animate-spin-slow"
        />
        <div className="absolute -left-[-16%] -top-[-15%] justify-center z-2 w-2/3 flex items-center items-aligned">
          <Image src={image} alt="SAF Board Member" className="rounded-full object-cover h-20 w-20"/>
        </div>
        <div className="relative -top-[-20px] md:-top-[-5px] flex flex-col items-center justify-center font-bold text-xl ">
          <div className=" flex flex-col items-center justify-center text-saf-red inset-x-0 z-2 relative -top-[40px] text-sm md:text-2xl font-libre">
            {position}
          </div>
          <div className="relative -top-[40px] text-sm md:text-2xl font-lora">
            {name}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Board;
