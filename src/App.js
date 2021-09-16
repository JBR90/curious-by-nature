import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";
import Footer from "./layout/Footer";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login";
import AddEvent from "./pages/eventsAdmin/AddEvent";
import UpdateEvents from "./pages/eventsAdmin/UpdateEvents";
import Modal from "./layout/navigation/Modal";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { motion } from "framer-motion";
import { navList } from "./layout/navigation/navList";

import eventService from "./services/eventService";
import { initializeEvents } from "../src/redux/reducers/eventReducer";
import { useDispatch } from "react-redux";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeEvents());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navigation handleModal={handleModal} navList={navList} />

        {showModal ? (
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <Modal navList={navList} />
          </motion.div>
        ) : (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/join-us" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/addevent" component={AddEvent} />
            <Route path="/editevent" component={UpdateEvents} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
