"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PhotoStrip = ({ imageBar }) => {
  const variants = {
    hidden: { opacity: 1, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 5,
        duration: 2,
      },
    },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variants}
      >
        <Image src={imageBar} alt="pictures" layout="1/2" objectFit="1/2" />
      </motion.div>
    </div>
  );
};

export default PhotoStrip;
