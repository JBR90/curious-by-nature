import React from "react";
import NavLinks from "./NavLinks";
import { useLocation, NavLink } from "react-router-dom";
import { indigo } from "tailwindcss/colors";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = ({
  navList,
  handleHamburger,
  handleModal,
  navOpen,
  setNavOpen,
}) => {
  const setLocation = useLocation();

  const handleModalClose = () => {
    if (navOpen) {
      handleModal();
      setNavOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`${
          setLocation.pathname === "/join-us" ||
          setLocation.pathname === "/contact"
            ? "text-black"
            : "text-white bg-black bg-opacity-20"
        }  z-50 font-sans shadow`}
      >
        <div className="lg:w-4/5 m-auto   flex flex-row justify-between text-center py-8 px-4   items-baseline w-full">
          <div className="transform transition duration-500 hover:scale-105">
            <NavLink
              onClick={(e) => handleModalClose()}
              to="/"
              className=" sm:text-2xl  text-1xl   hover:text-blue-dark transform transition duration-500 hover:scale-110"
            >
              Curious by Nature
            </NavLink>
          </div>
          <div className=" hidden  sm:block  invisible sm:visible sm:mr-20 mr-0 ">
            {navList.map((navItem) =>
              navItem.title !== "icon" ? (
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  to={navItem.path}
                  key={navItem.id}
                  alt={navItem.name}
                  className={
                    "text-lg no-underline hover:underline  hover:text-blue-dark px-4 "
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
            )}
          </div>

          {/* // Hamburger */}

          <div
            onClick={handleHamburger}
            className={`  sm:hidden tham tham-e-spin tham-w-8  ${
              navOpen ? "tham-active" : ""
            }`}
          >
            <div className="tham-box">
              <div className="tham-inner bg-black " />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
