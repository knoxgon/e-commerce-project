import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducer/root";
import thunk from "redux-thunk";
import { getFirebase, isLoaded } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../../__config/firebase';
import { useSelector } from "react-redux";
import { Loading } from '../../__misc/loader';

export const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Loading/>
  return children
}

export const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), reduxFirestore(firebase)))
