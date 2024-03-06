"use client";
import Image from "next/image";

const PhotoStrip = ({ imageBar }) => {
  return (
    <div>
      <Image src={imageBar} alt="pictures" layout="1/2" objectFit="1/2" />
    </div>
  );
};

export default PhotoStrip;
