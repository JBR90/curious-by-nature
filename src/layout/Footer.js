import React from "react";

const Footer = () => {
  return (
    <div className=" w-screen bg-black text-white">
      <div class=" lg:w-4/5 m-auto  grid grid-cols-12 px-4 py4">
        <aside class="col-span-6">Address</aside>
        <main class="col-span-3">Sitelinks</main>
        <div class="col-span-3">social media</div>
      </div>
    </div>
  );
};

export default Footer;
