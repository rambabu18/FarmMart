import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './reducers/productReducer';

const intitalState = {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(combineReducers({
    products:productReducer
}),
intitalState,
composeEnhancer(applyMiddleware(thunk))
)

export default store;