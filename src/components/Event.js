import React from "react";

const Event = ({ props }) => {
  return (
    <div className="w-full bg-white my-8">
      <div className=" sm:justify-center lg:w-4/5 m-auto px-4 py-10 grid grid-cols-2">
        <div className="flex    ">
          <img
            className="object-cover   overflow-hidden   w-11/12  "
            src={props.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center px-4">
          <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
            {props.event_name}
          </h1>
          <p className="mb-4 md:text-1xl  lg:text-2xl">{props.description}</p>
          <p className="mb-4 md:text-1xl  lg:text-2xl">{props.Date}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
