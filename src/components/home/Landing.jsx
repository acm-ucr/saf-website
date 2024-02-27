"use client";
import React from "react";
import Flower from "../../../public/svg/landing.svg";
import Flowermobile from "../../../public/svg/landing-mobile.svg";
import Ripplel from "../../../public/svg/ripple-landing.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const Landing = () => {
  return (
    <div className="w-full min-h-screen flex flex-row items-center relative">
      <Image src={Flower} alt="saf flower" className="hidden xl:block w-1/3" />
      <Image src={Flowermobile} alt="saf flower" className="w-1/2 xl:hidden" />
      <div className="flex flex-row justify-end md:w-2/3 absolute md:relative">
        <Image
          src={Ripplel}
          alt="ripples image"
          className="hidden md:block w-1/2 md:absolute -translate-y-1/2 z-0"
        />
        <motion.div
          className="flex flex-col items-end md:gap-3 w-5/6 z-8"
          variants={animation}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <motion.p
            className="text-right font-libre text-2xl md:text-6xl text-saf-red text-nowrap font-bold mt-2 mb-1"
            variants={animation}
            transition={{ ...transition, delay: 0.2 }}
          >
            South Asian Federation
          </motion.p>

          <motion.p
            className="text-md leading-tight md:text-3xl text-black text-right xl:w-3/4 font-lora mb-2"
            variants={animation}
            transition={{ ...transition, delay: 0.4 }}
          >
            culturally, politically, and socially uniting the South Asian
            student population at UC Riverside
          </motion.p>
        </motion.div>
        <div className="w-2 md:w-4 bg-saf-beige-200 ml-2 md:ml-4 md:mr-[5%] mr-[3%]" />
      </div>
    </div>
  );
};

export default Landing;
