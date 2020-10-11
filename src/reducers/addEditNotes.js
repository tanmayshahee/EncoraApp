import types from '../actions/actionTypes';

const initialState = {
    notes: [],
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
        default:
            return state;
    }
}