import React from "react";
import Event from "../components/Event";
import { events } from "../mockData/events";
import Footer from "../layout/Footer";

const Events = () => {
  const currentEvents = [];
  const pastEvents = [];
  const date = new Date();
  const defaultFormatted = date.toLocaleDateString("en-GB");

  const dateReformater = (date) => {
    const parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  events.forEach((e) => {
    let tempDate = dateReformater(e.DateEnd);
    tempDate < date ? pastEvents.push(e) : currentEvents.push(e);
  });

  console.log("current", currentEvents);
  console.log("past", pastEvents);
  return (
    <div>
      {" "}
      <div className="      w-screen h-screen  ">
        <div className="   w-full py-20  h-2/4 ">
          {currentEvents.map((e) => (e = <Event key={e.id} props={e} />))}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;

{
  /* <div className="w-screen h-screen  ">
<div className="w-full border-2 border-yellow-400    m-auto  h-1/6 flex items-center justify-center  py-8 px-4   "></div>
<div className="lg:w-4/5 w-full border-2 border-yellow-400    m-auto  h-1/6 flex flex-col items-center justify-center  py-8 px-4   ">
  <h1>Events</h1>
  <div className="w-full">
    {currentEvents.map((e) => (e = <Event key={e.id} props={e} />))}
  </div>

  <h1>Past Events</h1>
</div>
</div> */
}
