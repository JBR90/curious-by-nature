import React from "react";
import NavLinks from "./NavLinks";
import { useLocation, NavLink } from "react-router-dom";
import { indigo } from "tailwindcss/colors";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { RiFacebookFill } from "react-icons/ri";
import logo from "../../images/CBN_LOGO_COLOUR1.svg";

const Navbar = ({
  handleHamburger,

  navOpen,

  handleModalClose,
}) => {
  const setLocation = useLocation();

  // const handleModalClose = () => {
  //   if (navOpen) {
  //     handleModal();
  //     setNavOpen(false);
  //   }
  // };

  return (
    <>
      <nav
        className={`${
          setLocation.pathname === "/join-us" ||
          setLocation.pathname === "/contact"
            ? "text-black"
            : "text-white "
          // : "text-white bg-black bg-opacity-20"
        }  z-50 font-sans `}
      >
        <div className="lg:w-4/5 m-auto    flex flex-row justify-between items-center text-center py-6 px-4    w-full ">
          <div className="transform transition duration-500 hover:scale-105">
            <NavLink
              onClick={(e) => handleModalClose()}
              to="/"
              className=" sm:text-2xl  text-1xl   hover:text-blue-dark transform transition duration-500 hover:scale-110"
            >
              <img
                className=" w-20 lg:w-36 md:w-28"
                src={logo}
                alt="curious_by_nature_logo"
              />
            </NavLink>
          </div>
          <div className=" hidden  sm:block  invisible sm:visible sm:mr-20 mr-0 ">
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/about"
              alt="About"
              className={
                "text-2xl no-underline hover:underline  hover:text-blue-dark px-4 "
              }
            >
              About
            </NavLink>

            <a
              target="_blank"
              rel="noreferrer"
              className={
                "text-2xl no-underline hover:underline  hover:text-blue-dark px-4 "
              }
              href="https://www.eventbrite.co.uk/o/curious-by-nature-london-35622664273"
            >
              Join Us
            </a>
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/contact"
              alt="Contact"
              className={
                "text-2xl no-underline hover:underline  hover:text-blue-dark px-4 "
              }
            >
              Contact
            </NavLink>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/curiousbynaturelondon/"
              className="inline text-2xl mb-1 ml-4 cursor-pointer"
            >
              <FaInstagram className="inline text-2xl mb-1 cursor-pointer" />
            </a>
            <div className="inline text-2xl  mb-1 ml-4 cursor-pointer">
              {/* <RiFacebookFill className="inline text-2xl mb-1  cursor-pointer " /> */}
            </div>

            {/* {navList.map((navItem) =>
              navItem.title !== "icon" ? (
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  to={navItem.path}
                  key={navItem.id}
                  alt={navItem.name}
                  className={
                    "text-2xl no-underline hover:underline  hover:text-blue-dark px-4 "
                  }
                >
                  {navItem.title}
                </NavLink>
              ) : (
                <div
                  className="inline text-2xl mb-1 ml-4 cursor-pointer"
                  key={navItem.id}
                >
                  {navItem.icon}
                </div>
              )
            )} */}
          </div>

          {/* // Hamburger */}

          <div
            onClick={handleHamburger}
            className={` px-10  sm:hidden tham tham-e-spin tham-w-8   ${
              navOpen ? "tham-active" : ""
            }`}
          >
            <div className="tham-box">
              <div
                className={`tham-inner ${
                  setLocation.pathname === "/about"
                    ? "bg-white"
                    : "bg-background-curious_dark "
                }  `}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
