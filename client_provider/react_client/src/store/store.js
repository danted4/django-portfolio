import {combineReducers, createStore} from 'redux';
import reducer1 from '../reducers/reducer';
import customMiddleware from '../middleware/middleware';
import { applyMiddleware } from 'redux';
const rootReducer = combineReducers({reducer1: reducer1});

// const store = createStore(rootReducer, applyMiddleware(customMiddleware));
// const store = applyMiddleware(customMiddleware)(createStore)(rootReducer);
const store = applyMiddleware(customMiddleware)(createStore)(rootReducer);

export default store;