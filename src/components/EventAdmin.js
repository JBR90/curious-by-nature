import React from "react";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";

// Event for admin - edit / delete

const EventAdmin = ({ props }) => {
  console.log(props);
  return (
    <div className="grid-cols-3">
      <div>{props.event_name}</div>
      <div>
        <FaEdit />
      </div>
      <FiDelete />
    </div>
  );
};

export default EventAdmin;
