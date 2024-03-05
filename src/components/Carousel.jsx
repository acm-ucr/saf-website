import Image from "next/image";
import { carousel } from "@/data/Carousel";

const Carousel = () => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="flex animate-marquee">
        {carousel.map((image, index) => (
          <div
            key={index}
            className="flex-grow items-stretch w-1/4 mx-2 sm:w-2/4 sm:mx-4"
          >
            <Image
              src={image}
              alt="carousel"
              className="object-cover min-w-60 h-5/6 sm:min-w-80 sm:h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation">
        {carousel.map((image, index) => (
          <div
            key={index}
            className="flex-grow items-stretch w-1/4 mx-2 sm:w-2/4 sm:mx-4"
          >
            <Image
              src={image}
              alt="carousel"
              className="object-cover min-w-60 h-5/6 sm:min-w-80 sm:h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
