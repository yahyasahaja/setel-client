import { combineReducers } from 'redux'

//dropherOrder Action-TYPE
export const UPDATE_DROPHERE_ORDER  = 'updateDrophereOrder'
export const UPDATE_DROPHERE_ORDER_PRODUCT = 'updateDrophereOrderProduct'
export const UPDATE_DROPHERE_ORDER_ADDRESS = 'updateDrophereOrderAddress'
export const UPDATE_DROPHERE_ORDER_PRODUCT_SIZE = 'updateDrophereOrderProductSize'

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

export const updateDrophereOrderProductSize = (id, key, value) => ({
    type: UPDATE_DROPHERE_ORDER_PRODUCT_SIZE,    
    key, 
    value
})

//drophereorder REDUCER
const sizeReducer = (state = {}, action) => {
    if(action.type === UPDATE_DROPHERE_ORDER_PRODUCT_SIZE){
        return {
            ...state, 
            [action.key]: action.value
        }
    }
    return state
}

const productReducer = (state = [], action) => {
    if(action.type === UPDATE_DROPHERE_ORDER_PRODUCT){
        return [
            ...state,
            state[action.id] = {
                ...state[action.id],
                [action.key] : {
                    ...state['products'][action.id][action.key],
                    [action.key]: action.value
                }
            }
        ]
    }
    else if (action.type === UPDATE_DROPHERE_ORDER_PRODUCT_SIZE){
        return [
            ...state,
            state[action.id] = {
                ...state[action.id],
                [action.key]: sizeReducer(undefined, action)
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
    else if(action.type === UPDATE_DROPHERE_ORDER_PRODUCT ||
            action.type === UPDATE_DROPHERE_ORDER_PRODUCT_SIZE){
        return {
            ...state,
            products: productReducer(undefined, action)
        }
    }
    else if(action.type === UPDATE_DROPHERE_ORDER_ADDRESS){
        return {
            ...state,
            address: addressReducer(undefined, action)
        }
    }
    return state
}

export default drophereOrder