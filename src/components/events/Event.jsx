import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Event = ({
  day = "",
  month = "",
  date = "Saturday, October 28, 2023",
  start = "2pm - 3pm",
  end = "",
  summary = "",
  location = "Location Room 123",
  link = "",
  description = "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dictum sit amet justo donec enim diam vulputate. Est pellentesque elit ullamcorper dignissim cras tincidunt. Eget mauris pharetra et ultrices neque ornare aenean. Amet mauris commodo quis imperdiet massa. Tellus cras adipiscing enim eu. ",
}) => {
  return (
    <div className="bg-white flex flex-col rounded-xl overflow-hidden w-11/12 md:w-3/4 ">
      <div className="px-4 py-1 flex items-left text-saf-brown bg-saf-beige-200">
        <p className="text-2xl font-semibold mb-1 mt-1">{summary}</p>
      </div>

      <div className="flex flex-row mt-2 -mb-4 text-saf-red text-left px-4">
        <div className="text-xl font-medium mr-16 ">{date}</div>
        <div className="text-xl font-medium pr-1">{start}</div>
        <div className="text-xl font-medium mr-16">{end}</div>
        <div className="text-xl font-medium mr-16">{location}</div>
        <div className="text-xl font-medium">
          {link && (
            <Link className="text-saf-red" href={link}>
              <FiExternalLink />
            </Link>
          )}
        </div>
      </div>

      <p className="w-full ml-3 px-8 py-2 font-medium text-lg md:text-base my-3">
        {description}
      </p>
    </div>
  );
};

export default Event;
