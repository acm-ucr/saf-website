"use client";
import React from "react";
import Circle from "@/components/home/get-invloved/Circle";
import { links } from "@/data/GetInvolved.js";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";

const GIanimation = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const GetInvolved = () => {
  return (
    <div className=" my-10 md:my-14 flex flex-col items-center justify-center">
      <p className="font-libre font-bold text-xl md:text-4xl mb-6 md:mb-14">
        Get Involved
      </p>
      <motion.div
        variants={GIanimation}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <Row className="items-center justify-center w-full md:w-screen">
          {links &&
            links.map((linkData, index) => (
              <Circle
                key={index}
                text={linkData.text}
                link={linkData.link}
                icon={linkData.icon}
              />
            ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default GetInvolved;
