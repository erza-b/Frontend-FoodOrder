


import { api } from "../../config/api";

import * as actionTypes from "./ActionType";

import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
  GET_RESTAURANT_INGREDIENT_NAMES_REQUEST,GET_RESTAURANT_INGREDIENT_NAMES_
 } from "./ActionType";

 

 export const createMenuItem = ({ reqData, jwt }) => {
  return async (dispatch) => {
      dispatch({ type: CREATE_MENU_ITEM_REQUEST });

      try {
          const res = await api.post(`/api/admin/food`, reqData, {
              headers: {
                  Authorization: `Bearer ${jwt}`,
                  'Content-Type': 'application/json'
              },
          });
          console.log("create category ", res.data);
          dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: res.data });
      } catch (error) {
          console.log("catch -", error.res ? error.res.data : error.message);
          dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error.res ? error.res.data : error.message });
      }
  };
};

  
  export const getMenuItemsByRestaurantId = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
      try {
        const { data } = await api.get(`/api/admin/food/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
      }
    };
  };
  

  export const deleteFoodAction = ({ foodId, jwt }) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.DELETE_MENU_ITEM_REQUEST });
      try {
        await api.delete(`/api/admin/food/${foodId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        dispatch({ type: actionTypes.DELETE_MENU_ITEM_SUCCESS, payload: foodId });
      } catch (error) {
        dispatch({ type: actionTypes.DELETE_MENU_ITEM_FAILURE, payload: error });
      }
    };
  };

  
// export const getAllIngredientsOfMenuItem =({reqData}) => {
//     return async (dispatch) => {
//         dispatch({type:GET_ALL_ING});
//         try{
//             const { data } = await api.get(
//                 `api/food/search?name=${keyword}`, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             console.log("data----- ",data);
//             dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
//         }catch(error){
//             console.log("catch error ",error);
//             dispatch({try:SEARCH_MENU_ITEM_FAILURE,payload:error})
//         }
//     }
// };

export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(
                `/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("data----- ", data);
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error ", error);
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error })
        }
    }
};

export const updateMenuItemAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("update menuitems availability  ", data);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error ", error);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error })
        }
    }
};

export const getRestaurantIngredientNames = ({ id, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_INGREDIENT_NAMES_REQUEST });

    try {
      const response = await api.get(`/restaurant/${id}/names`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: actionTypes.GET_RESTAURANT_INGREDIENT_NAMES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching restaurant ingredient names:", error);
      dispatch({
        type: actionTypes.GET_RESTAURANT_INGREDIENT_NAMES_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const getIngredientsOfRestaurantMenu = async ({ id, jwt }) => {
  try {
    const response = await fetch(`your_api_url/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch ingredients");
    }

    const data = await response.json();
    // Assuming the API response is an array of objects with 'name' property
    const names = data.map(ingredient => ingredient.name);
    return names;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};
