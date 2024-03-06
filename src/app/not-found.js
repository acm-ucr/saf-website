import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full items-center bg-saf-beige-100">
      <Image src={TitleAsset} alt="Title Svg" className="w-4/5 transform" />
      <p className="text-center text-8xl text-saf-red font-bold">404</p>
      <p className="text-center text-3xl text-saf-brown font-libre font-bold">
        page not found
      </p>
      <Link
        as={Link}
        eventkey="1"
        href="/"
        className="border-1 border-saf-brown w-1/6 text-center no-underline text-saf-brown px-3 py-3 text-sm font-libre font-bold"
      >
        BACK TO HOME
      </Link>
      <Image
        src={TitleAsset}
        alt="Title Svg"
        className="w-4/5 transform -scale-y-100"
      />
    </div>
  );
};

export default NotFound;
