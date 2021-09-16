import React from "react";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";

// Event for admin - edit / delete

const EventAdmin = ({ props, handleDelete }) => {
  console.log(props);
  return (
    <div className="grid grid-cols-10  bg-white border-2 border-black-200 shadow-md rounded px-2 py-2 ">
      <div className="col-span-9  ">{props.eventName}</div>
      <div className=" cursor-pointer flex flex-row justify-center col-span-1 p-2">
        <FaEdit className="mr-2" />
        <FiDelete id={props.id} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default EventAdmin;
