import React from "react";

const Footer = () => {
  return (
    <div className=" w-screen bg-black text-white py-4">
      <div className=" lg:w-4/5 m-auto  grid grid-cols-12 px-4 py4 ">
        <div className="col-span-8 my-8">
          <p className="font-extrabold">Curious by Nature </p>
          <br />
          <p>123 Demo Street</p>
          <p>London</p>
          <p>07656365436</p>
        </div>
        <div class="col-span-2 my-8">
          <p className="font-extrabold">Sitelinks</p>
          <br />
          <p>About</p>
          <p>Events</p>
          <p>Contact</p>
        </div>
        <div className="col-span-2 my-8">
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
