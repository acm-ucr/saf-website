import React from "react";
import Title from "@/components/Title";
import Boards from "@/components/board/Boards";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col items-center">
      <Title text={"Board"} />
      <Boards />
    </div>
  );
};

export default page;
