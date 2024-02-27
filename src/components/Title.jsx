"use client";
import React from "react";
import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
import { motion } from "framer-motion";

const slidedownanimation = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const Title = ({ text }) => {
  return (
    <div className="flex flex-col w-[140%] md:w-3/4 relative">
      <Image src={TitleAsset} alt="Title Svg" className="w-full" />
      <div className="w-full bottom-6 md:bottom-14 absolute text-center p-2 text-saf-red text-2xl md:text-4xl font-bold font-serif">
        <motion.div
          variants={slidedownanimation}
          transition={{ ...transition }}
          initial="hidden"
          whileInView="show"
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
};

export default Title;
