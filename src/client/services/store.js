import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';
import app from './reducer'

const defaultStateTree = {
    selected: {},
    step: {},
    formData: {
        // product:{
        //     product1: {
        //         size:{
        //             sizeS: 0,
        //             sizeM: 0,
        //             sizeL: 0,
        //             sizeXL: 0,
        //             sizeXXL: 0,
        //         }
        //     }
        // }
    }
}

//STORE
const store = createStore(
    app,
    defaultStateTree,    
    applyMiddleware(ReduxPromise)
)
export default store