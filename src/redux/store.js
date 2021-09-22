import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import eventReducer from "./reducers/eventReducer";
import { firebaseReducer } from "react-redux-firebase";

const reducer = combineReducers({
  events: eventReducer,
  firebase: firebaseReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log(store.getState());

export default store;
