"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 1, x: -100 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  duration: 0.7,
};

const PhotoStrip = ({ imageBar }) => {
  return (
    <motion.div
      variants={animation}
      transition={{ ...transition }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Image src={imageBar} alt="pictures" layout="1/2" objectFit="1/2" />
    </motion.div>
  );
};

export default PhotoStrip;
