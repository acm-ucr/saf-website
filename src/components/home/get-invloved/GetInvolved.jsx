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
  duration: 0.5,
};

const GetInvolved = () => {
  return (
    <div className="my-10 md:my-14 flex flex-col items-center justify-center">
      <p className="font-libre font-bold text-xl md:text-4xl mb-6 md:mb-14">
        Get Involved
      </p>

      <Row className="flex flex-row items-center justify-center w-full md:w-screen">
        {links &&
          links.map((linkData, index) => (
            <motion.div
              key={index}
              variants={GIanimation}
              transition={{ ...transition, delay: 0.15 * index }}
              initial="hidden"
              whileInView="show"
            >
              <Circle
                text={linkData.text}
                link={linkData.link}
                icon={linkData.icon}
              />
            </motion.div>
          ))}
      </Row>
    </div>
  );
};

export default GetInvolved;
