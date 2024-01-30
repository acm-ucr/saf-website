import React from "react";
import Title from "@/components/Title";
import Boards from "@/components/board/Boards";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Boards />
    </div>
  );
};

export default page;
