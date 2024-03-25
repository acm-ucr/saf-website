"use client";
import React from "react";
import Image from "next/image";
import mandala from "../../../public/svg/board-mandala.svg";
import { motion } from "framer-motion";
const Board = ({ position, name, image }) => {
  const slidedownanimation = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={slidedownanimation}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.5 }}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center group font-bold font-libre text-sm md:text-2xl 2xl:text-3xl"
    >
      <div className=" flex items-center justify-center relative w-36 md:w-[325px] 2xl:w-[400px] aspect-square ">
        <Image
          src={mandala}
          alt="Mandala"
          className="opacity-20 group-hover:animate-spin-slow w-full"
        />
        <Image
          src={image}
          alt="SAF Board Member"
          className="absolute w-2/3 aspect-square rounded-full object-cover"
        />
      </div>
      <p className="text-saf-red -mt-3 md:-mt-10 mb-0 max-w-36 md:max-w-none text-center">
        {position}
      </p>
      <p>{name}</p>
    </motion.div>
  );
};

export default Board;
