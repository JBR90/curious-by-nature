import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";
import { getUser, login } from "../services/authService";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const passwordRef = useRef();
  const emailRef = useRef();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/updateevents");
      // setCurrentUser(user);
      console.log(user);
      setCurrentUser(user);
    } catch (err) {
      setError("Failed to login", err.message);
      console.log(err);
    }

    // if (currentUser) {
    // }
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex h-full justify-center items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              ref={emailRef}
            ></input>
          </div>
          <h1>{currentUser}</h1>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              ref={passwordRef}
            ></input>
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

export default Login;
