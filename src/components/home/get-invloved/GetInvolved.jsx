import React from "react";
import Circle from "@/components/home/get-invloved/Circle";
import { links } from "@/data/GetInvolved.js";
import Row from "react-bootstrap/Row";

const GetInvolved = () => {
  return (
    <div className="my-10 md:my-14 flex flex-col items-center justify-center">
      <p className="font-libre font-bold text-xl md:text-4xl mb-6 md:mb-14">
        Get Involved
      </p>
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
    </div>
  );
};

export default GetInvolved;
