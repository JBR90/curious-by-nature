import React from "react";
import Event from "../components/Event";
// import { events } from "../mockData/events";
import { useSelector } from "react-redux";
import Footer from "../layout/Footer";

const Events = () => {
  const events = useSelector((state) => state.events);

  const currentEvents = [];
  const pastEvents = [];
  const date = new Date();
  const defaultFormatted = date.toLocaleDateString("en-GB");

  const dateReformater = (date) => {
    const parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  if (events) {
    events.forEach((e) => {
      let tempDate = dateReformater(e.dateEnd);
      tempDate < date ? pastEvents.push(e) : currentEvents.push(e);
    });
  }

  return (
    <div>
      {" "}
      <div className="      w-screen h-screen  ">
        <div className="   w-full py-20  h-2/4 ">
          <div className="w-full  text-center">
            <h1 className="text-4xl bg-yellow-100 p-6 mt-16 mb-5">Upcoming</h1>
          </div>
          {currentEvents.map(
            (e) => (e = <Event key={e.id} props={e} past={false} />)
          )}
          <div className="w-full  text-center">
            <h1 className="text-4xl bg-yellow-100 p-6 mt-16 mb-5">
              Past Events
            </h1>
          </div>
          {pastEvents.map(
            (e) => (e = <Event key={e.id} props={e} past={true} />)
          )}

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
