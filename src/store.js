/* eslint-disable no-underscore-dangle */
import { createStore,applyMiddleware ,compose } from 'redux'; 
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import baggersReducer from './reducers/baggersReducer';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    combineReducers({baggersReducer}), 
    initialState ,
    compose( 
    applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) =>a)
    );

export default store;