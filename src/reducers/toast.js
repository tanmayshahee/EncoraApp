import types from '../actions/actionTypes';

const initialState = {
    showToast: false,
    message: '',
};

export default function toast(state = initialState, action){
    const payload = action.payload;
    switch(action.type){
        case types.TOGGLE_TOAST: {
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state;
    }
}