import React from "react";
import NavLinks from "./NavLinks";
import { useLocation, NavLink } from "react-router-dom";

const Navbar = ({
  navList,
  handleHamburger,
  handleModal,
  navOpen,
  setNavOpen,
}) => {
  console.log(navOpen);
  const setLocation = useLocation();
  console.log(setLocation.pathname);

  const handleModalClose = () => {
    console.log("clcikc");
    setNavOpen(false);
    handleModal();
  };

  return (
    <>
      <nav
        className={`${
          setLocation.pathname === "/events"
            ? "text-black"
            : "text-white bg-black bg-opacity-20"
        }  z-50 font-sans shadow`}
      >
        <div className="lg:w-4/5 m-auto   flex flex-row justify-between text-center py-8 px-4   items-baseline w-full">
          <div class="transform transition duration-500 hover:scale-105">
            <NavLink
              onClick={(e) => handleModalClose()}
              to="/"
              className=" sm:text-2xl  text-1xl   hover:text-blue-dark transform transition duration-500 hover:scale-110"
            >
              Curious by Nature
            </NavLink>
          </div>
          <div class=" hidden sm:block  invisible sm:visible sm:mr-20 mr-0 ">
            {navList.map((navItem) => (
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
            ))}
          </div>

          {/* // Hamburger */}

          <div
            onClick={handleHamburger}
            class={`  sm:hidden tham tham-e-spin tham-w-8  ${
              navOpen ? "tham-active" : ""
            }`}
          >
            <div class="tham-box">
              <div class="tham-inner bg-black " />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
