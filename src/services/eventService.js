import axios from "axios";
import events from "../mockData/events";

const baseUrl = "http://localhost:3001/events";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  //   const event = { content };
  const response = await axios.post(baseUrl, content);
  return response.data;
};

const updateEvent = async (id, content) => {
  const event = { content };
  const response = await axios.put(`${baseUrl}/${id}`, event);
  return response.data;
};

const deleteEvent = async (id) => {
  const response = await axios.delete(baseUrl + "/" + id);

  return response.data;
};

export default { getAll, createNew, deleteEvent };
