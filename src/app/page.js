import Landing from "@/components/home/Landing";
import SAF from "@/components/home/SAF";
import PhotoStrip from "@/components/home/PhotoStrip";
import WhyJoin from "@/components/home/WhyJoin";
import GetInvolved from "@/components/home/get-invloved/GetInvolved";
import ImageBar1 from "../../public/images/ImageBar1.webp";
import ImageBar2 from "../../public/images/ImageBar2.webp";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Landing />
      <SAF />
      <PhotoStrip imageBar={ImageBar1} />
      <WhyJoin />
      <PhotoStrip imageBar={ImageBar2} />
      <GetInvolved />
    </div>
  );
};
export default Home;
