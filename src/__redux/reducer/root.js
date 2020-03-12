import { combineReducers } from "redux";
import { userWithinPageLocationReducer } from "./userWithinPageLocationReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  userTrack: userWithinPageLocationReducer
});
