import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../services/firebase";
import { useSelector } from "react-redux";
// import { useAuth, useAuthState } from "../../contexts/AuthContext";
import { useGetUser } from "../../services/authService";

export default function PrivateRoute({ component: Component, ...rest }) {
  //   const [user, setUser] = useState(null);
  //   const user = useSelector((state) => state.user);
  //   console.log(user, ",private");

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       setUser(user);
  //     });

  //     return () => unsubscribe();
  //   });
  //   console.log("user", user);
  const user = null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to={"/login"} />;
      }}
    ></Route>
  );
}
