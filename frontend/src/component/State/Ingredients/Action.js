
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENT_FAILURE,
    GET_INGREDIENT_SUCCESS,
    UPDATE_STOCK,
} from './ActionType';
import {  api } from '../../config/api';


// export const getIngredientsOfRestaurant = ({ id, jwt }) => {
//     return async (dispatch) => {
//         try {
//             const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             console.log("get all ingredients", response.data);
//             dispatch({
//                 type: GET_INGREDIENTS,
//                 payload: response.data,
//             });
//         } catch (error) {
//             console.log("error", error);
//             // Handle error, dispatch an error action, etc
//         }
//     };
// };

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get ingredients", response.data);
            dispatch({
                type: GET_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_INGREDIENT_FAILURE,
                payload: error,
            });
        }
    };
};

export const createIngredient = ({ ingredientData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_INGREDIENT_REQUEST });
        try {
            const response = await api.post('/api/admin/ingredients', ingredientData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                },
            });
            console.log("create ingredients", response.data);
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.error("Error creating ingredient: ", error.response ? error.response.data : error.message);
            dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error.response ? error.response.data : error.message });
        }
    };
};

export const createIngredientCategory = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });

        try {
            const res = await api.post(`/api/admin/ingredients/category`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                },
            });
            console.log("create category ", res.data);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
        } catch (error) {
            console.log("catch -", error.res ? error.res.data : error.message);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error.res ? error.res.data : error.message });
        }
    };
};

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get ingredients category", response.data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_FAILURE,
                payload: error,
            });
        }
    };
};


export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.put(
                `/api/admin/ingredients/${id}/stoke`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            dispatch({
                type: UPDATE_STOCK,
                payload: data,
            });
            console.log("update ingredients stock", data);
        } catch (error) {
            console.log("error", error);
            // Handle error, dispatch an error action, etc
        }
    };
};