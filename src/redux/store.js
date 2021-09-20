import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import eventReducer from "./reducers/eventReducer";

const reducer = combineReducers({
  events: eventReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log(store.getState());

export default store;
