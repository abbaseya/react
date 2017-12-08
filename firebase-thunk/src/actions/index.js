import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDXY0pNQx-Zlo-9uz1N-DAR65By9f242QU",
  authDomain: "redux-d7c1a.firebaseapp.com",
  databaseURL: "https://redux-d7c1a.firebaseio.com",
  projectId: "redux-d7c1a",
  storageBucket: "redux-d7c1a.appspot.com",
  messagingSenderId: "479831166202"
};
const FBase = firebase.initializeApp(config).database().ref();

import {
	FETCH_CONTACTS,
	CREATE_CONTACT,
	DELETE_CONTACT
} from './types';

export function fetchContacts() {
	return dispatch => {
		FBase.on('value', snapshot => {
			dispatch({
				type: FETCH_CONTACTS,
				payload: snapshot.val()
			});
		});
	}
}

export function createContact(contact) {
	return dispatch => FBase.push(contact);
}

export function deleteContact(key) {
	return dispatch => FBase.child(key).remove();
}