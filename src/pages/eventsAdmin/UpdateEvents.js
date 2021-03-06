import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { GrAddCircle } from "react-icons/gr";
import {
  deleteEvent,
  updateEvent,
  createEvent,
} from "../../redux/reducers/eventReducer";
import UpdateModal from "../eventsAdmin/UpdateModal";
import UpdateEventsModal from "../eventsAdmin/UpdateEventsModal";
import { logout } from "../../services/authService";
import { useGetUser } from "../../services/authService";

import EventAdmin from "../../components/EventAdmin";

const UpdateEvents = () => {
  // is Modal for adding or updating
  const [addOrUpdate, setAddOrUpdate] = useState("add");
  const [eventToUpdate, setEventToUpdate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  const history = useHistory();
  // const user = useGetUser();
  // console.log(user);

  const handleModal = (e) => {
    const id = e.target.id;

    setEventToUpdate(events.find((e) => e.id === id));
    if (addOrUpdate === "update") {
    }

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

  const handleLogout = async () => {
    await logout();
    history.push("/login");
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
          eventToUpdate={eventToUpdate}
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
        <button
          onClick={handleLogout}
          className=" cursor-pointer border-2 fixed right-3 bottom-3"
        >
          Logout
        </button>

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
                setAddOrUpdate={setAddOrUpdate}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default UpdateEvents;
