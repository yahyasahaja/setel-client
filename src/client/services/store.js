import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';
import app from './reducer'

const defaultStateTree = {
    selected: {},
    step: {},
    formData: {
        drophereOrder:{
            products:[
                {
                    size:{
                        s: 1
                    }
                }
            ]
        }
    },
}

//STORE
const store = window.store = createStore(
    app,
    defaultStateTree,    
    applyMiddleware(ReduxPromise)
)
export default store