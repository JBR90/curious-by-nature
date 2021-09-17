import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteEvent,
  updateEvent,
  createEvent,
} from "../../redux/reducers/eventReducer";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useHistory } from "react-router-dom";

const UpdateModal = ({
  addOrUpdate,
  handleAdd,
  handleUpdate,
  handleDelete,
  setShowModal,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const id = e.target.id;
    console.log(id);
    const newEventObject = {
      eventName: titleRef.current.value,
      location: locationRef.current.value,
      dateStart: startDate,
      dateEnd: endDate,
      time: timeRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };
    console.log("add or update", addOrUpdate);
    console.log(newEventObject);
    // handleAdd(newEventObject);

    if (addOrUpdate === "add") {
      // dispatch(createEvent(newEventObject));
      console.log("Add");
      handleAdd(newEventObject);
      // history.push("/updateevent");
    } else {
      console.log("update");
      //   handleUpdate(newEventObject, id);
    }
  };

  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const timeRef = useRef();
  const locationRef = useRef();
  return (
    <div className="w-screen    bg-white  z-50">
      <div className="flex    items-center">
        <form
          className="w-full overflow-scroll  justify-center flex "
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="  w-3/4 h-3/6    bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4 ">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="title"
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
                htmlFor="description"
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
                htmlFor="username"
              >
                image URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="imageURL"
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
                  htmlFor="start-date"
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
                  htmlFor="end-date"
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
                htmlFor="time"
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
                htmlFor="location"
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
                // type="submit"
                onClick={(e) => handleSubmit(e)}
                className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              {/* <button onClick={(e) => setShowModal(false)}>Cancel</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
