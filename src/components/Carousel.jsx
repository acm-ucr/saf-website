import Image from "next/image";

const Carousel = ({ data }) => {
  return (
    <div className="relative flex overflow-hidden w-screen scale-150 md:scale-100 mb-10">
      <div className="flex animate-marquee justify-between w-screen items-stretch">
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
      <div className="flex absolute animate-marquee-continuation justify-between w-screen h-full items-stretch">
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
