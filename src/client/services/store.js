import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';
import app from './reducer'

const defaultStateTree = {
    selected: {},
    step: {},
    formData: {},
    products:{}
}

//STORE
const store = window.store = createStore(
    app,
    defaultStateTree,    
    applyMiddleware(ReduxPromise)
)
export default store