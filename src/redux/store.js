import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;