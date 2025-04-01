"use client";

import { items } from "@/data/Nav";
import { usePathname } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import WhiteLogo from "../../public/svg/white-logo.svg";

const Navigation = () => {
  const pathName = usePathname();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="w-full m-0 md:min-h-[6vh] p-0 bg-saf-brown bg-opacity-80 justify-between items-center backdrop-blur-sm font-libre"
    >
      <Navbar.Brand className="p-0">
        <Link
          className="hover:opacity-60 duration-300 w-1/5 2xl:w-1/4"
          href="/"
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
      <Navbar.Collapse className="items-center lg:justify-end justify-center flex">
        <Nav className="mb-2 w-12/12 no-underline flex text-xl items-center left-0 lg:ml-auto text-center">
          {items.map(({ name, link }, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={link}
              className={`hover:cursor-pointer mb-0 py-1 px-4 !text-saf-beige-100 text-xl whitespace-nowrap hover:!text-saf-beige-200 duration-300 ${
                pathName === link ? "underline" : "no-underline"
              }`}
            >
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
