import axios from "axios";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_FAILURE, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_SUCCESS, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from "./ActionType";
import { API_URL, api } from "../../config/api";

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data.jwt }); 
        }
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            alert("Success! Please log in...");
            reqData.navigate("/account/login");
        } else {
            reqData.navigate("/");
        }
        console.log("Register success", data);
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
        console.log("error", error);
    }
};

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        }
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurants/");
        } else {
            reqData.navigate("/");
        }
        console.log("Login success", data);
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
        console.log("error", error);
    }
};

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const response = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        });
        dispatch({ type: GET_USER_SUCCESS, payload: response.data });
        console.log("User profile", response.data);
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
        console.log("error", error);
    }
};

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });

    try {
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
        console.log("added to favorite ", data);
    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
        console.log("error", error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        console.log("logout success");
    } catch (error) {
        console.log("error", error);
    }
};

// Add reset password functionality
export const resetPassword = ({ email, newPassword }) => async (dispatch) => {
    try {
        const response = await fetch('/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword }),
        });
        const data = await response.json();
        // Handle the response as needed
    } catch (error) {
        console.error("Error resetting password", error);
    }
};

