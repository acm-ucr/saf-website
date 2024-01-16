import React from "react";

const Title = () => {
  return (
    <div className="flex justify-center items-center relative h-96"> {/* Adjust height as needed */}
      <div className="z-10">Title</div> {/* z-index for layering */}
      <img src="/svg/Landing.svg" alt="Landing" className="absolute top-0 left-0 w-24 h-auto" /> {/* Adjust size and position as needed */}
    </div>
  );
};

export default Title;
