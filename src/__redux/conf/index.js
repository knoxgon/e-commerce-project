import { createFirestoreInstance } from 'redux-firestore';
import { store } from '../store';
import firebase from '../../__config/firebase'

export const rrf = {
  firebase,
  config: {
    enableLogging: false,
    useFirestoreForProfile: true,
    attachAuthIsReady: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}
