import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { useLocation, NavLink } from "react-router-dom";

import { motion } from "framer-motion";

export default function Modal({
  navList,
  handleModal,
  showModal,
  handleModalClose,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <div className="animated fadeIn flex justify-center items-center  inset-0 overflow-y-auto border  outline-none focus:outline-none w-screen h-screen  ">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            <div className=" flex flex-col justify-center ">
              <NavLink
                onClick={(e) => handleModalClose()}
                exact={true}
                activeClassName="is-active"
                to="/about"
                alt="About"
                className={
                  "text-6xl text-center no-underline text-grey-darkest hover:text-blue-dark px-4 py-4  "
                }
              >
                About
              </NavLink>

              <a
                target="_blank"
                rel="noreferrer"
                className={
                  "text-6xl text-center no-underline text-grey-darkest hover:text-blue-dark px-4 py-4  "
                }
                href="https://www.eventbrite.co.uk/o/curious-by-nature-london-35622664273"
              >
                Join Us
              </a>
              <NavLink
                onClick={(e) => handleModalClose()}
                exact={true}
                activeClassName="is-active"
                to="/contact"
                alt="Contact"
                className={
                  "text-6xl text-center no-underline text-grey-darkest hover:text-blue-dark px-4 py-4 "
                }
              >
                Contact
              </NavLink>
              {/* {navList.map((navItem) =>
                navItem.title !== "icon" ? (
                  <a
                    href={navItem.path}
                    key={navItem.id}
                    className={
                      "text-7xl text-center no-underline text-grey-darkest hover:text-blue-dark px-4 py-4 "
                    }
                  >
                    {navItem.title}
                  </a>
                ) : null
              )} */}
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/curiousbynaturelondon/"
                  className="flex text-4xl flex-row justify-center space-x-10 mt-10"
                >
                  <FaInstagram className="inline text-5xl mb-1 ml-4 cursor-pointer" />
                  {/* <RiFacebookFill className="inline text-5xl mb-1 ml-4 cursor-pointer " /> */}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="Join mailing list"
                  href="http://eepurl.com/hLhOBX"
                  className="flex text-4xl flex-row justify-center space-x-10 mt-10"
                >
                  <BiNews className="inline text-5xl mb-1 ml-4 cursor-pointer" />
                  {/* <RiFacebookFill className="inline text-5xl mb-1 ml-4 cursor-pointer " /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
