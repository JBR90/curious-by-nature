import React from "react";

const Event = ({ props, past }) => {
  return (
    <div className={`w-full bg-white ${past ? "opacity-50" : ""}  `}>
      <div className=" sm:justify-center lg:w-4/5 m-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex order-1 md:order-1 justify-center  ">
          <img
            className="object-cover   overflow-hidden w-10/12  md:w-9/12 "
            src={props.image}
            alt={props.event_name}
          />
        </div>
        <div className="flex m-auto w-10/12 lg:w-full md:order-2 flex-col justify-center ">
          <h1 className="   bottom-56  w-full text-black text-2xl font-semibold mb-4  lg:text-3xl">
            {props.event_name}
          </h1>
          <p className="mb-4 md:text-base  lg:text-1xl">{props.description}</p>
          <p className=" text-base font-semibold  ">{`Start date: ${props.DateStart}`}</p>
          <p className=" text-base font-semibold  ">{`End date:   ${props.DateEnd}`}</p>
          <p className=" text-base font-semibold  ">{`Time:   ${props.Time}`}</p>
          <p className="mb-4 text-base font-semibold  ">{`Location:   ${props.location}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
