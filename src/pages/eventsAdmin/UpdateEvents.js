import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteEvent,
  updateEvent,
  createEvent,
} from "../../redux/reducers/eventReducer";
import UpdateModal from "../eventsAdmin/UpdateModal";

import EventAdmin from "../../components/EventAdmin";

const UpdateEvents = () => {
  const [addOrUpdate, setAddOrUpdate] = useState("add");
  const [showModal, setShowModal] = useState(false);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  console.log(events);

  const handleModal = (e) => {
    console.log(e);
    setShowModal(true);
  };

  const handleDelete = (e) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      const id = e.currentTarget.id;
      console.log(id);

      dispatch(deleteEvent(id));
    }
  };

  const handleUpdate = (newEventObject, id) => {
    dispatch(updateEvent(newEventObject, id));
  };

  const handleAdd = (newEventObject) => {
    console.log("@@@add in update evets");
    dispatch(createEvent(newEventObject));
    console.log("@@@", events);
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
      <div className=" w-3/4 mt-28 flex flex-col justify-center h-full item-center">
        <h1 className="w-full font-bold text-center px-4 py-4">
          Update Events
        </h1>
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
