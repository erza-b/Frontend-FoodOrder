import { api } from '../../config/api';
import {
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_EVENTS_FAILURE,
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE
} from './ActionType';

export const createEvent = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENTS_REQUEST });

        try {
            const res = await api.post(`/api/admin/events`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log('create event:', res.data);
            dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
        } catch (error) {
            console.log('error in createEvent:', error);
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
        }
    };
};

export const getEvents = ({ jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: GET_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log('get events:', res.data);
            dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data });
        } catch (error) {
            console.log('error in getEvents:', error);
            dispatch({ type: GET_EVENTS_FAILURE, payload: error });
        }
    };
};

