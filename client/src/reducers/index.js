import { combineReducers } from "redux";
import worksReducer from "./workReducer";

export default combineReducers(
    {
        works: worksReducer
    }
);