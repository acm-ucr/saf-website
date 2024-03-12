import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Week from "@/components/awareness-week/Week";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title text={"South Asian Awareness Week"} />
      <Description
        title={"What is South Asian Awareness Week?"}
        text={
          "South Asian Awareness week is a week during which we will be hosting an event everyday from Sunday Jan 22nd til Friday Jan 27th so make sure to keep an eye out on our Instagram for each event as the individual posters for each event will be posted before the event with further details!!"
        }
      />
      <p className="text-xs md:text-xl w-5/6 -mt-4 font-lora">
        For further questions or concerns, please reach out to us on Instagram!
      </p>
      <Week />
    </div>
  );
};

export default page;
