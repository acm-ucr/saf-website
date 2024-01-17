import Landing from "@/components/home/Landing";
import SAF from "@/components/home/SAF";
import PhotoStrip from "@/components/home/PhotoStrip";
import WhyJoin from "@/components/home/WhyJoin";
import GetInvolved from "@/components/home/get-invloved/GetInvolved";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Landing />
      <SAF />
      <PhotoStrip />
      <WhyJoin />
      <PhotoStrip />
      <GetInvolved />
    </div>
  );
};
export default Home;
