"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.webp";
import mandala from "../../public/svg/mandala.svg";
import { motion } from "framer-motion";

const animationLeftMandala = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const animationRightMandala = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const Photo = () => {
  return (
    <div className="flex relative justify-center items-center">
      <motion.div
        variants={animationLeftMandala}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
        className="max-sm:hidden w-1/5 absolute z-1 -left-[-18%]"
      >
        <Image src={mandala} alt="mandala" />
      </motion.div>
      <Image
        src={image1}
        className="w-5/6 z-2 sm:w-1/2 z-2"
        alt="group photo"
      />
      <motion.div
        variants={animationRightMandala}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
        className="max-sm:hidden w-1/5 absolute z-1 -right-[-18%]"
      >
        <Image src={mandala} alt="mandala" />
      </motion.div>
    </div>
  );
};

export default Photo;
