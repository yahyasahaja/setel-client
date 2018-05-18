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
    type:  UPDATE_DROPHERE_ORDER_PRODUCT_SIZE, 
    id,   
    key, 
    value
})

//drophereorder REDUCER
const sizeReducer = ({size:state}, action) => {               
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
        let arr = [ ...state ]         
        arr[action.id] = { ...arr[action.id] , [action.key]: action.value }
        return arr        
    }
    else if (action.type === UPDATE_DROPHERE_ORDER_PRODUCT_SIZE){        
        let arr = [ ...state ]         
        arr[action.id] = { 
            ...arr[action.id] , 
            size: sizeReducer(arr[action.id] || {}, action)
        }
        return arr
        // return [
        //     ...state,
        //     state[action.id]= {
        //         ...state[action.id],
        //         size: sizeReducer(state[action.id] || {}, action)
        //     }
        // ]
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
            products: productReducer(state.products, action)
        }
    }
    else if(action.type === UPDATE_DROPHERE_ORDER_ADDRESS){
        return {
            ...state,
            address: addressReducer(state.address, action)
        }
    }
    return state
}

export default drophereOrder