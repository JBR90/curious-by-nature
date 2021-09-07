import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

import { motion } from "framer-motion";

export default function Modal({ navList, handleModal, showModal }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <div className="animated fadeIn flex justify-center items-center  inset-0 overflow-y-auto border border-yellow-400 outline-none focus:outline-none w-screen h-screen  ">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            <div className=" flex flex-col justify-center ">
              {navList.map((navItem) =>
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
              )}
              <div className="flex text-4xl flex-row justify-center space-x-10 mt-10">
                <FaInstagram className="inline text-5xl mb-1 ml-4 cursor-pointer" />
                <RiFacebookFill className="inline text-5xl mb-1 ml-4 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
