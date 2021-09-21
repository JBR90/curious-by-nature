import React from "react";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
import UpdateModal from "../pages/eventsAdmin/UpdateModal";

// Event for admin - edit / delete

const EventAdmin = ({ props, handleDelete, handleModal, setAddOrUpdate }) => {
  return (
    <div className="grid grid-cols-10  bg-white border-2 border-black-200 shadow-md rounded px-2 py-2 ">
      <div className="col-span-9  ">{props.eventName}</div>
      <div className=" cursor-pointer flex flex-row justify-center col-span-1 p-2">
        <div
          onClick={(e) => {
            setAddOrUpdate("update");
            handleModal(e);
          }}
          id={props.id}
        >
          <FaEdit pointerEvents="none" className="mr-2" />
        </div>
        <FiDelete id={props.id} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default EventAdmin;
