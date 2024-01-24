import React from "react";

const Description = ({ title, text }) => {
  return (
    <div className="flex flex-col w-5/6 gap-2">
      <div className="flex flex-row items-center gap-3">
        <div className="bg-saf-beige-200 w-3 h-11" />
        <p className="font-bold text-3xl h-full m-0">{title}</p>
      </div>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Description;
