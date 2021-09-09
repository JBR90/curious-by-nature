import eventService from "../../services/eventService";

const reducer = (state = [], action) => {
  console.log("ACTION:", action);
  switch (action.type) {
    case "NEW_EVENT":
      return [...state, action.data];
    case "INIT_EVENTS":
      return action.data;
    case "UPDATE_EVENT":
      const id = action.data.id;
      const changedEvent = action.data;
      return state.map((event) => (event.id !== id ? event : changedEvent));
    case "DELETE_EVENT":
      const deleteId = action.data.id;
      return state.filter((event) => event.id !== deleteId);

    default:
      return state;
  }
};

export const initializeEvents = () => {
  return async (dispatch) => {
    const events = await eventService.getAll();
    dispatch({
      type: "INIT_EVENTS",
      data: events,
    });
  };
};

export const createEvent = (content) => {
  return async (dispatch) => {
    const newEvent = await eventService.createNew(content);
    dispatch({
      type: "NEW_EVENT",
      data: newEvent,
    });
  };
};

export const editEvent = (content, id) => {
  return async (dispatch) => {
    const updatedEvent = await eventService.updateEvent(content, id);
    dispatch({
      type: "UPDATE_EVENT",
      data: updatedEvent,
    });
  };
};

export default reducer;
