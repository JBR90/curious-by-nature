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
    let tempDate = dateReformater(e.Date);
    tempDate < date ? pastEvents.push(e) : currentEvents.push(e);
  });

  console.log("current", currentEvents);
  console.log("past", pastEvents);
  return (
    <div>
      {" "}
      <div className="   z-30  w-screen h-screen  ">
        {/* ----------------------------------------------------------------------------------- // hero // */}

        <div className=" relative  w-full   h-2/4 ">
          <div
            className="object-cover object-right  overflow-hidden   w-screen h-full"
            src=""
            alt=""
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-56  w-full  lg:w-4/5 py-4 px-4  ">
            <p className=" whitespace-pre-wrap w-full m-auto text-center  bottom-56  w-full text-black text-4xl ">
              {`Events`}
            </p>
          </div>

          {/* --------------------------------------------------------------------------------// Text + Image section 1 // */}
          {currentEvents.map((e) => (e = <Event key={e.id} props={e} />))}
          <div className="w-full bg-white ">
            <div className=" sm:justify-center lg:w-4/5 m-auto px-4 py-10 grid grid-cols-2">
              <div className="flex    ">
                <img
                  className="object-cover   overflow-hidden   w-11/12  "
                  src=""
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center px-4">
                <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                  Changing the world is possible. We’ve done it before.
                </h1>
                <p className="mb-4 md:text-1xl  lg:text-2xl">
                  Our leadership team bring years of experience to bear on the
                  greatest challenge of our time. We’re results driven, with a
                  proven record of previous successes.
                </p>
                <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------// Text + Image section 2 // */}
          <div className="w-full bg-white my-8">
            <div className=" sm:justify-center lg:w-4/5 m-auto  py-10 grid grid-cols-2">
              <div className="flex flex-col justify-center px-4">
                <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                  Changing the world is possible. We’ve done it before.
                </h1>
                <p className="mb-4 md:text-1xl  lg:text-2xl">
                  Our leadership team bring years of experience to bear on the
                  greatest challenge of our time. We’re results driven, with a
                  proven record of previous successes.
                </p>
                <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button>
              </div>
              <div className="flex  px-4  ">
                <img
                  className="object-cover   overflow-hidden   w-11/12  "
                  src=""
                  alt=""
                />
              </div>
            </div>
          </div>
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
