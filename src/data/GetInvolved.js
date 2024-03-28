import {
  FaDiscord,
  FaSquareFacebook,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaMailchimp } from "react-icons/fa";

export const links = [
  {
    text: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/gK9tCdzB",
    delay: 0,
  },

  {
    text: "Instagram",
    icon: <RiInstagramFill />,
    link: "https://www.instagram.com/ucrsaf/?hl=en",
    delay: 0.25,
  },
  {
    text: "Facebook",
    icon: <FaSquareFacebook />,
    link: "https://www.facebook.com/UCRSAF?mibextid=LQQJ4d",
    delay: 0.5,
  },
  {
    text: "Email",
    icon: <FaEnvelope />,
    link: "mailto:safucr@gmail.com",
    delay: 0.75,
  },
  {
    text: "Mailchimp",
    icon: <FaMailchimp />,
    link: "https://forms.gle/1TCrZxdaTAZJWV34A",
  },
  {
    text: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCsrtjiMal0p_ETZYnlp6zyQ",
    delay: 1,
  },
];
