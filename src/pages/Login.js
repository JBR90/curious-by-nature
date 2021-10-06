import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";
import { getUser, login } from "../services/authService";
import { userLogin, userLogout } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const passwordRef = useRef();
  const emailRef = useRef();

  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const user = await firebase.login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(user);

      // const user = await dispatch(
      //   userLogin(emailRef.current.value, passwordRef.current.value)
      // );
      history.push("/protected");
      // setCurrentUser(user);
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
      {!isLoaded(auth) ? (
        <span>Loading....</span>
      ) : isEmpty(auth) ? (
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
      ) : (
        <div className="w-screen h-screen flex flex-col justify-center">
          <button
            onClick={history.push("/protected")}
            className="border-2 border-black py-2"
          >
            Update Events
          </button>
          <button>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
