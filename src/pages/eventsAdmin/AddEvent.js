import React, { useState, useRef } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useDispatch } from "react-redux";
import { createEvent } from "../../redux/reducers/eventReducer";

import { useHistory } from "react-router-dom";

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newEventObject = {
      eventName: titleRef.current.value,
      location: locationRef.current.value,
      dateStart: startDate,
      dateEnd: endDate,
      time: timeRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };

    if (Object.values(newEventObject).includes(" ")) {
      return;
    }

    dispatch(createEvent(newEventObject));
  };

  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const timeRef = useRef();
  const locationRef = useRef();

  return (
    <div className="w-screen ">
      <div className="flex h-full  border border-yellow-400  items-center">
        <form className="w-full justify-center flex " action={handleSubmit}>
          <div className=" mt-24 w-3/4 h-3/6 overflow-auto   bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4 ">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="title"
                type="text"
                placeholder="title"
                ref={titleRef}
                required
              ></input>
            </div>
            <div className="">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border border-red rounded w-full h-32 py-2 px-3 text-grey-darker mb-3"
                id="description"
                type="description"
                ref={descriptionRef}
                required
              ></textarea>
              {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                image URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="title"
                type="text"
                placeholder="URL"
                ref={imageRef}
                required
              ></input>
            </div>

            <div className="flex mb-4 py-4">
              <div>
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="start-date"
                >
                  Start Date
                </label>
                <DatePicker
                  className=" w-32 cursor-pointer border shadow rounded"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  ref={startDateRef}
                  required
                />
              </div>
              <div className="px-6">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="end-date"
                >
                  End Date
                </label>
                <DatePicker
                  className="cursor-pointer w-32 cursor-pointer border shadow rounded"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  ref={endDateRef}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="time"
              >
                Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="time"
                type="text"
                placeholder="eg 12:00 - 15:00 "
                ref={timeRef}
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="location"
              >
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="location"
                type="text"
                ref={locationRef}
                required
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
