import userReducer from "./users/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    users: userReducer,
})

export default rootReducer;