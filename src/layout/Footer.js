import React from "react";

const Footer = () => {
  return (
    <div className=" w-screen bg-black text-white  py-4">
      <div className=" lg:w-4/5 m-auto   grid grid-cols-12 px-4 py4 ">
        <div className=" col-span-6 md:col-span-8 my-8 text-sm md:text-lg ">
          <p className=" font-extrabold">Curious by Nature </p>
          <br />
          <p>123 Demo Street</p>
          <p>London</p>
          <p>07656365436</p>
        </div>
        <div class="text-sm md:text-lg col-span-3 md:col-span-2 my-8">
          <p className="  font-extrabold">Sitelinks</p>
          <br />
          <p>About</p>
          <p>Events</p>
          <p>Contact</p>
        </div>
        <div className=" text-sm md:text-lg  col-span-2 my-8">
          <p className="font-extrabold">Follow</p>
          <br />
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
