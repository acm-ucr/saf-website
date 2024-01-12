import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import Image from "next/image";
import safLogo from "../app/saf-logo.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <div class="py-3 px-3 flex items-center justify-between bg-saf-beige-200">
      <div>
        <Image alt="saf-logo" style={{ width: "12%" }} src={safLogo} />
      </div>

      <div class="flex gap-4">
        <Link href="https://www.instagram.com/">
          <FaInstagram className="size-10 text-saf-red instagram-icon" />
        </Link>

        <Link href="https://www.google.com/">
          <FaEnvelope className="size-10 text-saf-red email-icon" />
        </Link>

        <Link href="https://www.facebook.com/">
          <FaSquareFacebook className="size-10 text-saf-red facebook-icon" />
        </Link>

        <Link href="https://www.linkedin.com/">
          <FaLinkedin className="size-10 text-saf-red linkedin-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
