import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const navList = [
  { id: 1, title: "About", path: "/about" },
  {
    id: 2,
    title: "Join Us",
    path: `https://www.eventbrite.co.uk/o/curious-by-nature-london-35622664273`,
  },
  // { id: 3, title: "Links", path: "/links" },
  { id: 4, title: "Contact", path: "/contact" },
  {
    id: 6,
    title: "icon",
    path: "/contact",
    icon: <FaInstagram className="inline text-2xl  cursor-pointer" />,
  },
  {
    id: 5,
    title: "icon",
    path: "/contact",
    icon: <RiFacebookFill className="inline text-2xl  cursor-pointer " />,
  },
];
