import React from "react";

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-row item-center justify-center px-14 py-14">
      <div className="flex flex-col w-1/2 px-10 py-10 pe-8 bg-saf-beige-200">
        <p className="ml-8 text-4xl font-bold font-libre text-white mt-20">
          WhyJoinSAF
        </p>
        <p className="w-3/4 font-lora text-xl">
          Explore rich South Asian traditions, engage in community service, and
          develop leadership skills at SAF! Join a vibrant community celebrating
          diversity and unity. Join SAF for a unique and enriching college
          experience!
        </p>
      </div>
      <div className="px-20 py-8 flex flex-col w-1/4">
        <ul className="flex flex-col list-disc list-outside">
          <li className="mt-3 font-libre leading-10 text-xl">
            Cultural Appreciation
          </li>
          <li className="font-libre leading-10 text-xl">Inclusivity</li>
          <li className="font-libre leading-10 text-xl">Community</li>
          <li className="font-libre leading-10 text-xl">Diversity</li>
          <li className="font-libre leading-10 text-xl">Leadership</li>
          <li className="font-libre leading-10 text-xl">Innovation</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyJoin;
