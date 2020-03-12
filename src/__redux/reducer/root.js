import { combineReducers } from "redux";
import { userWithinPageLocationReducer } from "./userWithinPageLocationReducer";

export const rootReducer = combineReducers({
  userTrack: userWithinPageLocationReducer
});
