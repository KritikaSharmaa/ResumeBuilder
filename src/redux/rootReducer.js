import { combineReducers } from "redux";
import UserReducer from "./Reducer/UserReducer";

const rootReducer=combineReducers({user:UserReducer});

export default rootReducer;