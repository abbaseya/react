import {combineReducers} from 'redux';
import ContactsReducer from './contacts';

const rootReducer = combineReducers({
	contacts: ContactsReducer
});

export default rootReducer;