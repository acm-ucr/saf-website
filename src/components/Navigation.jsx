"use client";

import { items } from "@/data/Nav";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import WhiteLogo from "../../public/svg/white-logo.svg";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:min-h-[5vh] p-0 bg-saf-brown bg-opacity-80 justify-between items-center backdrop-blur-sm"
    >
      <Navbar.Brand className="p-0">
        <Link
          as={Link}
          eventkey="1"
          className="p-0 no-underline flex items-center gap-2"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image src={WhiteLogo} className=" w-16 my-2 ml-1" alt="saf-logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className=" text-saf-beige-100 text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center md:justify-end justify-center flex">
        <Nav className="mb-2 w-12/12 no-underline flex text-xl items-center ml-auto">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`hover:cursor-pointer mb-0 py-1 px-4 !text-saf-beige-100 text-xl whitespace-nowrap hover:!text-saf-beige-200 duration-300 ${
                selected === item.name ? "underline" : "no-underline"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
