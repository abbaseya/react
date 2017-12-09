import _ from 'lodash';

import {
	FETCH_CONTACTS,
	CREATE_CONTACT,
	DELETE_CONTACT
} from '../actions/types';

export default function(state=[], action) {
	switch (action.type) {
		case FETCH_CONTACTS:
		return action.payload;
		default:
		return state;
	}
}