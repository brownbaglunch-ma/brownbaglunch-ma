import { FETCH_BAGGERS_BEGIN, FETCH_BAGGERS_SUCCESS, FETCH_BAGGERS_FAILURE } from '../actions/types';

export const initialState = {
    baggers: null,
    loading: false,
    error: null
}


const baggersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BAGGERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,

            }
        case FETCH_BAGGERS_SUCCESS:
            return {
                ...state,
                loading: false,
                baggers: action.payload
            }
        case FETCH_BAGGERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
}
export default baggersReducer;