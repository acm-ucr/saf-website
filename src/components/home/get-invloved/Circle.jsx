"use client";
import React from "react";
import Image from "next/image";
import mandala from "@/public/svg/mandala.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const Circle = ({ text, link, icon, delay }) => {
  const slidedownanimation = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Link href={link} target="_blank" className="no-underline">
      <motion.div
        variants={slidedownanimation}
        transition={{ duration: 0.4, delay: delay }}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center"
      >
        <div className="relative group">
          <Image
            src={mandala}
            alt="Mandala"
            className="md:w-full h-full group-hover:rotate-45 duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center text-saf-red transform text-4xl md:text-7xl lg:text-6xl xl:text-7xl">
            {icon}
          </div>
        </div>
        <p className="font-libre font-bold text-xs md:text-xl text-saf-red">
          {text}
        </p>
      </motion.div>
    </Link>
  );
};

export default Circle;
