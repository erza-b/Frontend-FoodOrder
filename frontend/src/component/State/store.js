import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk }from 'redux-thunk';
import { authReducer } from './Authentication/Reducer';
import restaurantReducer from './Restaurant/Reducer';
import menuItemReducer from './Menu/Reducer';
import cartReducer from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import restaurantsOrderReducer from './Restaurant Order/Reducer';
import { ingredientReducer } from './Ingredients/Reducer';
import eventReducer from './Event/Reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
  cart: cartReducer,
  order: orderReducer,
  restaurantOrder: restaurantsOrderReducer,
  ingredients: ingredientReducer,
  events: eventReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
