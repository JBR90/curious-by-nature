import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const navList = [
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Events", path: "/events" },
  // { id: 3, title: "Links", path: "/links" },
  { id: 4, title: "Contact", path: "/contact" },
  {
    id: 6,
    title: "icon",
    path: "/contact",
    icon: <FaInstagram className="inline text-2xl mb-1 ml-4 cursor-pointer" />,
  },
  {
    id: 5,
    title: "icon",
    path: "/contact",
    icon: (
      <RiFacebookFill className="inline text-2xl mb-1 ml-4 cursor-pointer " />
    ),
  },
];
