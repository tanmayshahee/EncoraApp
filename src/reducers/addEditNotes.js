import types from '../actions/actionTypes';

const initialState = {
    notes: [],
    currentEditableNote: {}
}

export default function addEditNotes(state = initialState, action){
    const payload = action.payload;
    switch(action.type){
        case types.ADD_NOTE: {
            let newState = {...state};
            newState.notes = [...state.notes];
            newState.notes.push(payload);
            return newState;
        }
        case types.DELETE_NOTE: {
            let newState = {...state};
            newState.notes = [...state.notes];
            newState.notes.splice(payload.deletedIndex, 1);
            return newState;
        }
        case types.SET_CURRENT_EDITABLE_NOTE: {
            let newState = {...state};
            newState.currentEditableNote = {...state.currentEditableNote};
            newState.currentEditableNote = payload.itemToEdit;
            return newState;
        }
        case types.EDIT_NOTE: {
            let newState = {...state};
            newState.notes = [...state.notes];
            let editNote = {
                key: payload.key,
                title: payload.title,
                body: payload.body,
            }
            newState.notes[payload.editIndex] = editNote;
            return newState;
        }
        case types.RESET_NOTE: {
            let newState = {...state};
            newState.currentEditableNote = {};
            return newState;
        } 
        default:
            return state;
    }
}