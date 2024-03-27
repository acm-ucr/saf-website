import React from "react";
import Circle from "@/components/home/get-invloved/Circle";
import { links } from "@/data/GetInvolved.js";

const GetInvolved = () => {
  return (
    <div className="my-10 md:my-14 flex flex-col items-center justify-center w-full">
      <p className="font-libre font-bold text-xl md:text-4xl mb-6 md:mb-14">
        Get Involved
      </p>
      <div className="grid md:flex md:justify-evenly md:w-full grid-cols-3 gap-3 px-5">
        {links &&
          links.map((linkData, index) => (
            <Circle
              key={index}
              text={linkData.text}
              link={linkData.link}
              icon={linkData.icon}
              delay={linkData.delay}
            />
          ))}
      </div>
    </div>
  );
};

export default GetInvolved;
