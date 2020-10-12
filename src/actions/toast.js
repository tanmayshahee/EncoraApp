import types from './actionTypes';

export const toggleToast = (payload) => ({
    type: types.TOGGLE_TOAST,
    payload
});