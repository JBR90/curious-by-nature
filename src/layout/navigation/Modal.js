import React from "react";

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
            <div className=" flex flex-col ">
              {navList.map((navItem) => (
                <a
                  href={navItem.path}
                  key={navItem.id}
                  alt={navItem.name}
                  className={
                    "text-7xl no-underline text-grey-darkest hover:text-blue-dark px-4 py-4 "
                  }
                >
                  {navItem.title}
                </a>
              ))}
            </div>
            {/*content*/}
          </div>
        </div>
      </motion.div>
    </>
  );
}
