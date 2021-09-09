import axios from "axios";
import events from "../mockData/events";

const baseUrl = "http://localhost:3001/events";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const event = { content };
  const response = await axios.post(baseUrl, event);
  return response.data;
};

const updateEvent = async (id, content) => {
  const event = { content };
  const response = await axios.put(`${baseUrl}/${id}`, event);
  return response.data;
};

export default { getAll, createNew };
