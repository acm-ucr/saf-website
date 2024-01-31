import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Image from "next/image";
import image4 from "@/public/images/image4.webp";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title text="Banquet" />
      <Description
        title={"What is Banquet?"}
        text={
          "Banquet is our end of the year celebration! It is a time for all of us to gather together and look back at the wonderful year we have had together."
        }
      />
      <Image src={image4} className="w-1/3" alt="banquet" />
      <div className="flex flex-col w-5/6 gap-2">
        <p className="text-xl">
          {
            "The wait is over! Grab your friends and get your tickets for the most anticipated banquet of the year. Join us for an unforgettable night of music, food, and celebration! Purchase your ticket now. Anyone is able to go!"
          }
        </p>
        <p className="text-xl">
          {
            "For those of you participating, get those applications in by Sunday, October 23rd at 11:59 p.m. for your final chance to be a part of our backstage crew. For further questions or concerns, please reach out to us on Instagram!"
          }
        </p>
      </div>
    </div>
  );
};

export default page;
