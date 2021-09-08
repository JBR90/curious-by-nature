import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

const AddEvent = () => {
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
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="description"
              type="description"
            ></textarea>
            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
