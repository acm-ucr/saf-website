import React from "react";
import Image from "next/image";

const PhotoStrip = ({ photoData }) => {
  return (
    <div className="flex flex-row justify-center w-full h-80">
      {photoData.map((photo, index) => (
        <Image
          className="w-1/3"
          key={index}
          src={photo.image}
          alt={photo.alt}
        />
      ))}
    </div>
  );
};

export default PhotoStrip;
