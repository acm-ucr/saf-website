import Landing from "@/components/home/Landing";
import SAF from "@/components/home/SAF";
import PhotoStrip1 from "@/components/home/PhotoStrip1";
import PhotoStrip2 from "@/components/home/PhotoStrip2";
import WhyJoin from "@/components/home/WhyJoin";
import ImageBar1 from "../../public/images/ImageBar1.webp";
import ImageBar2 from "../../public/images/ImageBar2.webp";
import GetInvolved from "@/components/home/get-invloved/GetInvolved";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center">
      <Landing />
      <SAF />
      <PhotoStrip1 imageBar={ImageBar1} />
      <WhyJoin />
      <PhotoStrip2 imageBar={ImageBar2} />
      <GetInvolved />
    </div>
  );
};
export default Home;
