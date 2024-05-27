import {
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_EVENTS_FAILURE,
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
} from './ActionType';

const initialState = {
    loading: false,
    events: [],
    error: null,
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENTS_REQUEST:
        case GET_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: action.payload,
            };
        case CREATE_EVENTS_FAILURE:
        case GET_EVENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default eventReducer;
