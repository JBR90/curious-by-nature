import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IoAddCircleSharp } from "react-icons/io5";
import { GrAddCircle } from "react-icons/gr";
import {
  deleteEvent,
  updateEvent,
  createEvent,
} from "../../redux/reducers/eventReducer";
import UpdateModal from "../eventsAdmin/UpdateModal";
import UpdateEventsModal from "../eventsAdmin/UpdateEventsModal";

import EventAdmin from "../../components/EventAdmin";

const UpdateEvents = () => {
  const [addOrUpdate, setAddOrUpdate] = useState("add");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  console.log("events in update events", events);

  const handleModal = (e) => {
    console.log(e.target);
    // setAddOrUpdate();
    setShowModal(true);
  };

  const handleDelete = (e) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      const id = e.currentTarget.id;
      dispatch(deleteEvent(id));
    }
  };

  const handleUpdate = async (newEventObject, id) => {
    dispatch(updateEvent(newEventObject, id));
  };

  const handleAdd = async (newEventObject) => {
    dispatch(createEvent(newEventObject));
  };
  return (
    <div className="w-screen   flex justify-center">
      {/* <UpdateModal /> */}
      {showModal && (
        <UpdateModal
          handleUpdate={handleUpdate}
          handleAdd={handleAdd}
          setShowModal={setShowModal}
          addOrUpdate={addOrUpdate}
        />
      )}
      {/* <UpdateEventsModal /> */}
      <div className=" w-3/4 mt-28 flex flex-col justify-center h-full item-center">
        <div className=" flex justify-center border-2">
          <h1 className="  font-bold text-center px-4 py-4">Add Event:</h1>
          <div
            value="add"
            className="flex items-center text-2xl hover:text-3xl"
          >
            <IoAddCircleSharp
              onClick={(e) => {
                handleModal(e);
                setAddOrUpdate("add");
              }}
              className="cursor-pointer"
            />
          </div>
        </div>

        {events.map(
          (e) =>
            (e = (
              <EventAdmin
                key={e.id}
                props={e}
                handleModal={handleModal}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default UpdateEvents;
