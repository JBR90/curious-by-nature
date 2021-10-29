import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div className=" w-screen bg-background-curious_dark text-white  py-4">
      <div className=" lg:w-4/5 m-auto   grid grid-cols-12 px-4 py4 ">
        <div className=" col-span-6 md:col-span-8 my-8 text-sm md:text-lg ">
          <p className=" font-extrabold">Curious by Nature </p>
          <br />
          <a href="mailto: curiousbynaturelondon@gmail.com ">Email</a>
          {/* <p>London</p> */}
          {/* <p>07656365436</p> */}
        </div>
        <div class="text-sm md:text-lg col-span-3 md:col-span-2 my-8">
          <p className="  font-extrabold">Sitelinks</p>
          <br />
          <p className="cursor-pointer" onClick={(e) => history.push("/about")}>
            About
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className={""}
            href="https://www.eventbrite.co.uk/o/curious-by-nature-london-35622664273"
          >
            Join Us
          </a>
          <p
            className="cursor-pointer"
            onClick={(e) => history.push("/contact")}
          >
            Contact
          </p>
        </div>
        <div className=" text-sm md:text-lg  col-span-2 my-8">
          <p className="font-extrabold">Follow</p>
          <br />
          {/* <p>Facebook</p> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/curiousbynaturelondon/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
