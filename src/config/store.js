import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import posts from '../reducers/posts'

const middlewares = [thunk];

const store = createStore(
    combineReducers({
        postReducer: posts
    }),
    applyMiddleware(...middlewares),
)

export default store