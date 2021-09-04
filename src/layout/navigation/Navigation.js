import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

// const navList = [
//   { id: 1, title: "About", path: "/about" },
//   { id: 2, title: "Events", path: "/events" },
//   { id: 3, title: "Links", path: "/links" },
//   { id: 4, title: "Contact", path: "/Contact" },
// ];
const Navigation = ({ handleModal, navList }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleHamburger = () => {
    setNavOpen(!navOpen);
    handleModal();
  };

  return (
    <div className="absolute z-50 w-screen">
      <Navbar
        navList={navList}
        handleHamburger={handleHamburger}
        handleModal={handleModal}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
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
