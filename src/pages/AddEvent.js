import React, { useState, useRef } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useHistory } from "react-router-dom";

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSubmit = () => {};
  return (
    <div className="w-screen h-screen">
      <div className="flex h-full justify-center items-center">
        <div className=" w-3/4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="title"
              type="text"
              placeholder="title"
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
              placeholder="title"
            ></input>
          </div>

          <div className="flex mb-4 py-4">
            <div>
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Start Date
              </label>
              <DatePicker
                className=" w-32 cursor-pointer border shadow rounded"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="px-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                End Date
              </label>
              <DatePicker
                className="cursor-pointer w-32 cursor-pointer border shadow rounded"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="time"
              type="text"
              placeholder="eg 12:00 - 15:00 "
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
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
