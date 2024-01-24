import React from "react";
import Circle from "@/components/home/get-invloved/Circle";
import { links } from "@/data/GetInvolved.js";

const GetInvolved = () => {
  return (
    <div className="my-14 flex flex-col w-full justify-center items-center">
      <p className="font-libre font-bold text-4xl mb-14">Get Involved</p>
      <div className="grid grid-cols-5 gap-10">
        {links &&
          links.map((linkData, index) => (
            <Circle
              key={index}
              text={linkData.text}
              link={linkData.link}
              icon={linkData.icon}
            />
          ))}
      </div>
    </div>
  );
};

export default GetInvolved;
