import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";
import Footer from "./layout/Footer";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Modal from "./layout/navigation/Modal";
import { motion } from "framer-motion";

const navList = [
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Resources", path: "/resources" },
  { id: 3, title: "Team", path: "/team" },
  { id: 4, title: "Login", path: "/login" },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Router>
        <Navigation handleModal={handleModal} />

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
            <Route exact path="/initiatives" component={Initiatives} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
