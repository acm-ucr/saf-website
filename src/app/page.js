import Landing from "@/components/home/Landing";
import SAF from "@/components/home/SAF";
import PhotoStrip from "@/components/home/PhotoStrip";
import WhyJoin from "@/components/home/WhyJoin";
import ImageBar1 from "../../public/images/ImageBar1.webp";
import ImageBar2 from "../../public/images/ImageBar2.webp";

import Circle from "@/components/home/get-invloved/Circle";
import { links } from "@/data/GetInvolved.js";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Landing />
      <SAF />
      <PhotoStrip imageBar={ImageBar1} />
      <WhyJoin />
      <PhotoStrip imageBar={ImageBar2} />
      <div className="font-serif font-bold text-4xl">Get Involved</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-3">
          {links &&
            links.map((linkData, index) => (
              <Circle
                key={index}
                text={linkData.text}
                link={linkData.link}
                icon={linkData.icon}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
