import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Photo from "@/components/Photo";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Description
        title={"Who We Are"}
        text={
          "SAF, at UC Riverside, is Riverside's South Asian Club. We aim to serve as the umbrella for all organizations that identify as South Asian. We are politically oriented with the goal of raising awarness of the diaspora experience and various social injustices that have occured in South Asia. We are also socially and culturally oriented, striving to have the South Asia student population celebrate culture through festivals and inclusive religous events."
        }
      />
      <Photo />
      <Description />
    </div>
  );
};

export default page;
