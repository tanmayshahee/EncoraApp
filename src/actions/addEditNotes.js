import types from './actionTypes';

export const addNote = (payload) => ({
    type: types.ADD_NOTE,
    payload
});

export const deleteNote = (payload) => ({
    type: types.DELETE_NOTE,
    payload
});