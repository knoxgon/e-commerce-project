import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer/root";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk))
