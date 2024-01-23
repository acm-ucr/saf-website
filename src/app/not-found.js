import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full items-center bg-saf-beige-100">
      <Image src={TitleAsset} alt="Title Svg" className="w-4/5" />
      <p className="text-center text-7xl text-saf-red font-bold font-serif">
        404
      </p>
      <p className="text-center text-xl text-saf-brown font-libre font-bold font-serif">
        page not found
      </p>
      <Link
        as={Link}
        eventkey="1"
        href="/"
        className="border-1 h-1/2 border-saf-brown w-1/6 text-center no-underline text-saf-brown font-libre font-serif"
      >
        BACK TO HOME
      </Link>
      <Image
        src={TitleAsset}
        alt="Title Svg"
        className="w-2/3 transform -scale-y-100"
      />
    </div>
  );
};

export default NotFound;
