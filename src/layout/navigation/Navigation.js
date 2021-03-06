import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

// const navList = [
//   { id: 1, title: "About", path: "/about" },
//   { id: 2, title: "Events", path: "/events" },
//   { id: 3, title: "Links", path: "/links" },
//   { id: 4, title: "Contact", path: "/contact" },
// ];
const Navigation = ({
  handleModal,
  handleModalClose,
  handleHamburger,
  navList,
  navOpen,
  setNavOpen,
}) => {
  // const [navOpen, setNavOpen] = useState(false);

  // const handleHamburger = () => {
  //   setNavOpen(!navOpen);
  //   handleModal();
  // };

  // const handleModalClose = () => {
  //   if (navOpen) {
  //     handleModal();
  //     setNavOpen(false);
  //   }
  // };

  return (
    <div className="absolute z-50 w-screen">
      <Navbar
        navList={navList}
        handleHamburger={handleHamburger}
        handleModal={handleModal}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        handleModalClose={handleModalClose}
      />
      {/* <Modal
        navList={navList}
        handleModal={handleModal}
        showModal={showModal}
      /> */}
    </div>
  );
};

export default Navigation;
