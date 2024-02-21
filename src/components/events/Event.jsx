import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Event = ({
  day = "",
  month = "",
  date = "",
  start = "",
  end = "",
  summary = "",
  location = "",
  link = "",
  description = "",
}) => {
  return (
    <div className="bg-saf-beige-100 flex flex-col rounded-xl overflow-hidden shadow w-11/12 md:w-3/4 ">
      <div className="px-4 flex items-left text-saf-brown bg-saf-beige-200">
        <p className="text-2xl font-semibold mb-1 mt-1">{summary}</p>
      </div>

      <div className="flex flex-row mt-2 text-saf-red text-left px-4">
        <div className="text-xl font-medium pr-2 ">{day}</div>
        <div className="text-xl font-medium pr-2 ">{month}</div>
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

      <p className="w-full px-4 font-medium text-lg md:text-base my-3">
        {description}
      </p>
    </div>
  );
};

export default Event;
