import React from "react";

const Title = () => {
  const containerHeight = "170px";

  return (
    <div
      className="relative w-2/3 overflow-hidden"
      style={{ height: containerHeight }}
    >
      <img
        src="/svg/Landing.svg"
        alt="Landing"
        className="absolute bottom-0 left-0 w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div>Title</div>
      </div>
    </div>
  );
};

export default Title;
