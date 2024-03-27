import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center min-h-screen">
      <Image src={TitleAsset} alt="Title Svg" className="w-4/5 " />
      <div className="flex items-center flex-col gap-2 w-full">
        <div className="text-center text-8xl text-saf-red font-bold">404</div>
        <div className="text-center text-3xl text-saf-brown font-libre font-bold mb-3">
          page not found
        </div>
        <Link
          as={Link}
          href="/"
          className="border-1 text-xl border-saf-brown w-1/2 md:w-1/6 text-center no-underline text-saf-brown px-3 py-3 font-libre font-bold hover:underline"
        >
          BACK TO HOME
        </Link>
      </div>

      <Image
        src={TitleAsset}
        alt="Title Svg"
        className="w-4/5 transform -scale-y-100"
      />
    </div>
  );
};

export default NotFound;
