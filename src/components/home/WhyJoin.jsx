"use client";
import React from "react";
import Image from "next/image";
import Ripple from "../../../public/svg/ripple.svg";
import { motion } from "framer-motion";

const animationX = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const animationY = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-row item-center justify-center my-14">
      <motion.div
        variants={animationY}
        transition={{ delay: 0.5 }}
        initial="hidden"
        whileInView="show"
        className="flex flex-col w-4/5 relative overflow-clip sm:w-2/3 px-4 py-2 sm:px-10 sm:py-10 pe-2 sm:pe-8 bg-saf-beige-200"
      >
        <Image
          src={Ripple}
          className="w-1/2 absolute -right-[10%] -top-[20%] "
          alt={"ripple asset svg"}
        />
        <p className="ml-3 sm:ml-8 text-2xl sm:text-4xl font-bold font-libre text-white mt-20">
          WhyJoinSAF
        </p>
        <p className="sm:w-3/4 font-lora text-xs sm:text-xl z-2">
          Explore rich South Asian traditions, engage in community service, and
          develop leadership skills at SAF! Join a vibrant community celebrating
          diversity and unity. Join SAF for a unique and enriching college
          experience!
        </p>
      </motion.div>
      <div className="hidden md:block w-1/4">
        <div className="flex flex-col justify-center items-center w-full">
          <motion.ul
            className="ml-5 flex flex-col list-disc list-outside"
            variants={animationX}
            transition={{ delay: 0.1 }}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              variants={animationY}
              transition={{ delay: 0.1 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="whitespace-nowrap mt-3 font-libre leading-10 sm:text-xl">
                Cultural Appreciation
              </li>
            </motion.div>
            <motion.div
              variants={animationY}
              transition={{ delay: 0.2 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="font-libre leading-10 text-xl">Inclusivity</li>
            </motion.div>
            <motion.div
              variants={animationY}
              transition={{ delay: 0.3 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="font-libre leading-10 text-xl">Community</li>
            </motion.div>
            <motion.div
              variants={animationY}
              transition={{ delay: 0.4 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="font-libre leading-10 text-xl">Diversity</li>
            </motion.div>
            <motion.div
              variants={animationY}
              transition={{ delay: 0.5 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="font-libre leading-10 text-xl">Leadership</li>
            </motion.div>
            <motion.div
              variants={animationY}
              transition={{ delay: 0.6 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <li className="font-libre leading-10 text-xl">Innovation</li>
            </motion.div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
