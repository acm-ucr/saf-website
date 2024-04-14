import Image from "next/image";

const Carousel = ({ data }) => {
  return (
    <div className="relative flex overflow-hidden w-screen scale-150 md:scale-100 mb-10">
      <div className="flex animate-marquee justify-evenly w-full items-stretch">
        {data.map((image, index) => (
          <div key={index} className="h-full flex items-stretch w-fit">
            <Image
              src={image}
              alt="carousel"
              className="h-full w-fit object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation justify-evenly w-full h-full items-stretch">
        {data.map((image, index) => (
          <div key={index} className="h-full flex items-stretch w-fit">
            <Image
              src={image}
              alt="carousel"
              className="h-full w-fit object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
