import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteEvent, editEvent } from "../../redux/reducers/eventReducer";

import EventAdmin from "../../components/EventAdmin";

const UpdateEvents = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const id = e.currentTarget.id;
    console.log(id);

    dispatch(deleteEvent(id));
  };

  return (
    <div className="w-screen  flex justify-center">
      <div className=" w-3/4 mt-28 flex flex-col justify-center h-full item-center">
        <h1 className="w-full font-bold text-center px-4 py-4">
          Update Events
        </h1>
        {events.map(
          (e) =>
            (e = (
              <EventAdmin key={e.id} props={e} handleDelete={handleDelete} />
            ))
        )}
      </div>
    </div>
  );
};

export default UpdateEvents;
