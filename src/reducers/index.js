import {combineReducers} from 'redux';
import addEditNotes from './addEditNotes';
import toast from './toast';

export default combineReducers({
    addEditNotes,
    toast
})