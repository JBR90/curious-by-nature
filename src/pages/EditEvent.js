import React from "react";
import { events } from "../mockData/events";
import EventAdmin from "../components/EventAdmin";

const EditEvent = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="flex flex-col justify-center h-full item-center">
        <h1>hi</h1>
        {events.map((e) => (e = <EventAdmin key={e.id} props={e} />))}
      </div>
    </div>
  );
};

export default EditEvent;
