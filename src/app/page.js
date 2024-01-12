import Landing from "@/components/home/Landing";
import SAF from "@/components/home/SAF";
import PhotoStrip from "@/components/home/PhotoStrip";
import WhyJoin from "@/components/home/WhyJoin";
import Circles from "@/components/home/get-invloved/Circles";
import { photoData1 } from "@/data/PhotoStrip1";
import { photoData2 } from "@/data/PhotoStrip2";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Landing />
      <SAF />
      <PhotoStrip photoData={photoData1} />
      <WhyJoin />
      <PhotoStrip photoData={photoData2} />
      <Circles />
    </div>
  );
};
export default Home;
