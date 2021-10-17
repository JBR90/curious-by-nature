import axios from "axios";
import events from "../mockData/events";
import { db } from "./firebase";
import { projectFirestore } from "./firebase";

const baseUrl = "http://localhost:3001/events";

const getAll = async () => {
  // FIREBASE;
  try {
    const snapshot = await db.collection("events").get();
    console.log(
      "test",
      snapshot.docs.map((doc) => (doc = { ...doc.data(), id: doc.id }))
    );
    return snapshot.docs.map((doc) => (doc = { ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error:", error);
  }

  // AXIOS

  // const response = await axios.get(baseUrl);
  // return response.data;
};

const createNew = async (content) => {
  // FIREBASE

  try {
    const res = await db.collection("events").add(content);
    const id = String(res.id);
    const addedEvent = await db
      .collection("events")
      .doc(id)
      .get()
      .then((snapshot) => snapshot.data());

    // const doc = await res.get().data();

    // const addedEvent = await db
    //   .collection("events")
    //   .doc(id)
    //   .get()
    //   .then((snapshot) => snapshot.data());
    return { ...addedEvent, id };
    // return String(res.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }

  // AXIOS

  // const event = { content };
  // const response = await axios.post(baseUrl, content);
  // return { ...response.data };
};

const updateEvent = async (content, id) => {
  // Firebase

  try {
    const res = await db
      .collection("events")
      .doc(id)
      .set(content)
      .once("value")
      .then((snap) => {
        console.log(snap);
      });
    console.log("RES", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }

  // axios
  // const event = { content };
  // const response = await axios.put(`${baseUrl}/${id}`, content);
  // return response.data;
};

const deleteEvent = async (id) => {
  // FIREBASE

  try {
    const res = await db.collection("events").doc(id).delete();
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }

  // AXIOS
  // const response = await axios.delete(baseUrl + "/" + id);

  // return response.data;
};

export default { getAll, createNew, deleteEvent, updateEvent };
