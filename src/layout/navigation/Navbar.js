import React from "react";
import NavLinks from "./NavLinks";

const Navbar = ({ navList, handleHamburger, navOpen }) => {
  console.log(navOpen);
  return (
    <>
      <nav class=" bg-black bg-opacity-20 z-50 font-sans  ">
        <div className="lg:w-4/5 m-auto   flex flex-row justify-between text-center py-8 px-4  shadow items-baseline w-full">
          <div class="transform transition duration-500 hover:scale-105">
            <a
              href="/"
              className=" sm:text-2xl  text-1xl   text-white hover:text-blue-dark transform transition duration-500 hover:scale-110"
            >
              Curious by Nature 2
            </a>
          </div>
          <div class=" hidden sm:block  invisible sm:visible sm:mr-20 mr-0 ">
            {navList.map((navItem) => (
              <a
                href={navItem.path}
                key={navItem.id}
                alt={navItem.name}
                class={
                  "text-lg no-underline hover:underline  text-white hover:text-blue-dark px-4 "
                }
              >
                {navItem.title}
              </a>
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
