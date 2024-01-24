import React from "react";
import Image from "next/image";

const PhotoStrip = ({ imageBar }) => {
  return <Image src={imageBar} alt="pictures" />;
};

export default PhotoStrip;
