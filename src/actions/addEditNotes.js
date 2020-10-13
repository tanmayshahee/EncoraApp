import types from './actionTypes';

export const addNote = (payload) => ({
    type: types.ADD_NOTE,
    payload
});

export const deleteNote = (payload) => ({
    type: types.DELETE_NOTE,
    payload
});

export const setCurrentEditableNote = (payload) => ({
    type: types.SET_CURRENT_EDITABLE_NOTE,
    payload
});

export const editNote = (payload) => ({
    type: types.EDIT_NOTE,
    payload
});

export const resetNote = (payload) => ({
    type: types.RESET_NOTE,
    payload
}); 