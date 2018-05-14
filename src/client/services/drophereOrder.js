import { combineReducers } from 'redux'

//dropherOrder Action-TYPE
export const UPDATE_DROPHERE_ORDER  = 'updateDrophereOrder'
export const UPDATE_DROPHERE_ORDER_PRODUCT = 'updateDrophereOrderProduct'
export const UPDATE_DROPHERE_ORDER_ADDRESS = 'updateDrophereOrderAddress'

//drophereorder ACTION
export const updateDrophereOrder = (key, value) => ({
    type: UPDATE_DROPHERE_ORDER,    
    key,
    value
})

export const updateDrophereOrderProduct = (id, key, value) => ({
    type: UPDATE_DROPHERE_ORDER_PRODUCT,
    id,
    key, 
    value
})

export const updateDrophereOrderAddress = (key, value) => ({
    type: UPDATE_DROPHERE_ORDER_ADDRESS,    
    key, 
    value
})

//drophereorder REDUCER
const productReducer = (state = [], action) => {
    if(action.type === UPDATE_DROPHERE_ORDER_PRODUCT){
        return [
            ...state,
            state[action.id] = {
                ...state[action.id],
                [action.key]: action.value
            }
        ]
    }
    return state
}


const addressReducer = ( state = {}, action) => {
    if(action.type === UPDATE_DROPHERE_ORDER_ADDRESS){
        return {
            ...state,
            [action.key]: action.value
        }
    }
    return state
}

const drophereOrder = (state = {}, action) => {
    if(action.type == UPDATE_DROPHERE_ORDER){
        return {
            ...state,
            [action.key]: action.value
        }
    }
    else if(action.type === UPDATE_DROPHERE_ORDER_PRODUCT){
        return {
            ...state,
            products: productReducer(undefined, action)
        }
    }
    else if(action.type === UPDATE_DROPHERE_ORDER_ADDRESS){
        return {
            ...state,
            adress: addressReducer(undefined, action)
        }
    }
    return state
}

export default drophereOrder