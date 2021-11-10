import eventService from "../../services/eventService";

const reducer = (state = [], action) => {
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
      const updatedEvents = state.filter((e) => e.id !== action.data);

      return [...updatedEvents];

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
    const addedEvent = await eventService.createNew(content);

    // console.log("****** this is new event ", newEventId);
    dispatch({
      type: "NEW_EVENT",
      data: addedEvent,
    });
  };
};

export const updateEvent = (content, id) => {
  return async (dispatch) => {
    const updatedEvent = await eventService.updateEvent(content, id);
    dispatch({
      type: "UPDATE_EVENT",
      data: { ...content, id },
    });
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    const deletedEvent = await eventService.deleteEvent(id);

    dispatch({
      type: "DELETE_EVENT",
      data: id,
    });
  };
};

export default reducer;
