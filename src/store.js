import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
export default store
