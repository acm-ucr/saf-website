"use client";
import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";

const slidedownanimation = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <motion.div
        variants={slidedownanimation}
        transition={{ ...transition, delay: 0.3 }}
        initial="hidden"
        whileInView="show"
        className="w-full flex justify-center"
      >
        <Title text={"About Us"} />
      </motion.div>

      <Description
        title={"Who We Are"}
        text={
          "SAF, at UC Riverside, is Riverside's South Asian Club. We aim to serve as the umbrella for all organizations that identify as South Asian. We are politically oriented with the goal of raising awarness of the diaspora experience and various social injustices that have occured in South Asia. We are also socially and culturally oriented, striving to have the South Asia student population celebrate culture through festivals and inclusive religous events."
        }
      />

      <Photo />

      <Description
        title={"Purpose of Organization"}
        text={
          "The purpose of this organization is to unite the South Asian student population at UC Riverside in a cultural, social and political sense. Countries such as Afghanistan, Bangladesh, Bhutan, Nepal, India, Maldives, Pakistan, Sri Lanka fall under the definition of South Asian countries. South Asian Federation aims to be the umbrella for all organizations that identify as South Asian. \n\n SAF hopes to have a South Asian director in Asian Pacific Student Programs and hopes to one day have a South Asian Costa Hall center at UCR. The purpose of these two goals is to provide access and resources for South Asian students. SAF is a politically oriented student organization with the goal of raising awareness of the diaspora experience and various social injustices that have occurred in South Asia to the overall UC Riverside campus. \n In addition, SAF is a social and cultural organization that strives to have the South Asian student population celebrate culture through festival /inclusive religious events. It is important to have this organization on campus in order to represent the South Asian population at UCR."
        }
      />

      <div className="hidden md:flex flex-col w-5/6 -mt-4">
        <p className="text-xs sm:text-xl">
          {
            "SAF hopes to have a South Asian director in Asian Pacific Student Programs and hopes to one day have a South Asian Costa Hall center at UCR. The purpose of these two goals is to provide access and resources for South Asian students. SAF is a politically oriented student organization with the goal of raising awareness of the diaspora experience and various social injustices that have occurred in South Asia to the overall UC Riverside campus. "
          }
        </p>
        <p className="text-xs sm:text-xl mb-10">
          {
            "In addition, SAF is a social and cultural organization that strives to have the South Asian student population celebrate culture through festival inclusive religious events. It is important to have this organization on campus in order to represent the South Asian population at UCR."
          }
        </p>
      </div>
    </div>
  );
};

export default page;
