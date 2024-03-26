"use client";
import React from "react";
import Image from "next/image";
import whiteLogo from "../../../public/svg/white-logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import Ripple from "../../../public/svg/ripple.svg";

const animation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const SAF = () => {
  return (
    <div className="flex flex-col relative overflow-clip w-full justify-center items-center py-5 bg-saf-red gap-3">
      <Image
        className="w-full absolute -left-[80%] translate-y-1/3 sm:w-1/2 md:w-1/3 lg:w-1/3 md:-left-[8%] lg:-left-[8%] z-3 "
        alt={"ripple asset svg"}
      />
      <Image
        src={Ripple}
        className="w-full absolute -right-[50%] rotate-90 -translate-y-1/3 sm:w-1/2 md:w-1/3 lg:w-1/3 md:-right-[1%] lg:-right-[1%] md:-translate-y-1/5 lg:-translate-y-1/5 z-3"
        alt={"ripple asset svg"}
      />

      <Image
        src={whiteLogo}
        alt="SAF Logo"
        className="sm:w-1/4 w-1/4  md:w-1/12 lg:w-1/12"
      />

      <motion.div
        variants={animation}
        transition={{ delay: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <p className=" text-white text-center sm:text-xl md:text-2xl lg:text-3xl font-libre font-bold ">
          {" "}
          Who We Are
        </p>
      </motion.div>
      <motion.div
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
        className=" text-white text-center sm:text-sm md:text-base lg:text-xl font-lora h-1/2 w-5/6 mb-3"
      >
        {" "}
        SAF, at UC Riverside, is Riverside’s South Asian Club. We aim to serve
        as the umbrella for all organizations that identify as South Asian. We
        are politically oriented with the goal of raising awareness of the
        diaspora experience and various social injustices that have occurred in
        South Asia. We are also socially and culturally oriented, striving to
        have the South Asian student population celebrate culture through
        festivals and inclusive religious events.
      </motion.div>
      <motion.div
        variants={animation}
        transition={{ delay: 0.4 }}
        initial="hidden"
        whileInView="show"
      >
        <Link
          href="/about"
          className="hover:underline min-w-[10rem] border-1 border-white w-1/6 text-center no-underline text-white px-3 py-3 sm:text-sm md:text-base lg:text-lg font-libre font-bold"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

export default SAF;
