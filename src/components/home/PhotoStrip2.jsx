"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 1, x: -200 },
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
      <Image src={imageBar} alt="pictures" />
    </motion.div>
  );
};

export default PhotoStrip;
