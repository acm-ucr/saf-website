"use client";
import React from "react";
import { motion } from "framer-motion";

const SAFanimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.8,
};

const Description = ({ title, text, scrollYProgress }) => {
  return (
    <div className="flex flex-col w-5/6 gap-2">
      <div className="flex flex-col w-5/6 gap-2">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-saf-beige-200 w-3 h-11" />

          <motion.div
            variants={SAFanimation}
            transition={{ ...transition, delay: 0.4 }}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-lg font-bold sm:text-3xl h-full m-0">{title}</p>
          </motion.div>
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px rgb(265,255,255)",
          }}
          variants={SAFanimation}
          transition={{ delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-xs sm:text-xl">{text}</p>
        </motion.div>
      </div>
  );
};

export default Description;
