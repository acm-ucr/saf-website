import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Event = ({
  day = "",
  month = "",
  date = "",
  start = "8pm",
  end = "9pm",
  summary = "",
  location = "Location 123",
  link = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis. Fringilla est ullamcorper eget nulla. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ante in nibh mauris cursus mattis molestie a iaculis. Potenti nullam ac tortor vitae purus. In arcu cursus euismod quis. Donec ac odio tempor orci dapibus ultrices in.",
}) => {
  return (
    <div className="bg-white flex flex-col rounded-xl overflow-hidden w-2/3 md:w-3/4 ">
      <div className="px-4 py-1 flex items-left text-saf-brown bg-saf-beige-200">
        <p className="text-md md:text-2xl font-semibold mb-1 mt-1">{summary}</p>
      </div>

      <div className="flex flex-col md:flex md:flex-row mt-2 -mb-4 text-saf-red text-left px-4">
        <div className="flex flex-row">
          <div className="md:text-xl font-medium pr-1 md:pr-2 ">{day}</div>
          <div className="md:text-xl font-medium pr-2 ">{month}</div>
          <div className="md:text-xl font-medium pr-1">{date}</div>
        </div>

        <div className="flex flex-row">
          <div className="md:text-xl font-medium md:ml-8">{start}</div>
          <div className="md:text-xl font-medium mr-16">-{end}</div>
        </div>

        <div className="md:text-xl font-medium mr-16">{location}</div>
        <div className="md:text-xl font-medium">
          {link && (
            <Link className="text-saf-red" href={link}>
              <FiExternalLink />
            </Link>
          )}
        </div>
      </div>

      <p className="w-full -ml-2 md:ml-3 px-8 py-2 font-medium text-sm md:text-base my-3">
        {description}
      </p>
    </div>
  );
};

export default Event;
