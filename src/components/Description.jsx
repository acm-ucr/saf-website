"use client";
import React from "react";
import { motion } from "framer-motion";

const animationY = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const animationX = {
  hidden: { opacity: 0, x: -15 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  duration: 0.7,
};

const Description = ({ title, text }) => {
  return (
    <div className="flex flex-col w-5/6 gap-2">
      <div className="flex flex-col w-5/6 gap-2">
        <div className="flex flex-row items-center gap-3">
          <motion.div
            variants={animationX}
            transition={{ ...transition, delay: 0.3 }}
            initial="hidden"
            whileInView="show"
            className="bg-saf-beige-200 w-3 h-11"
          ></motion.div>

          <motion.div
            variants={animationY}
            transition={{ ...transition, delay: 0.4 }}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-lg font-bold sm:text-3xl h-full m-0 font-libre">
              {title}
            </p>
          </motion.div>
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px rgb(265,255,255)",
          }}
          variants={SAFanimation}
          transition={{ delay: 0.1, damping: 50 }}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-xs sm:text-xl font-lora">{text}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
