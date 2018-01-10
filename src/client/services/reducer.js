//MODULES
import { combineReducers } from 'redux'

//ACTIONS
import {
  UPDATE_SELECTED,
  UPDATE_CURRENT_STEP,
  GOTO_NEXT_STEP,
  GOTO_PREV_STEP,
  INIT_STEP,
  UPDATE_FORM_DATA,
} from './actions'

//REDUCER
const selectedReducer = (state = {}, action) => {
  if (action.type === UPDATE_SELECTED) 
    return { ...state, [action.id]: action.selected }
  
  return state
}

const stepReducer = (state = null, action) => {
  //props: currentStep, maxCurrentStep, maxStep

  if (action.type = INIT_STEP) return {
    ...state,
    [action.id]: action.init
  }

  if (action.type === UPDATE_CURRENT_STEP) return {
    ...state,
    [action.id]: {
      ...state[action.id],
      currentStep: action.step,
    }
  }

  if (action.type == GOTO_NEXT_STEP) {
    let nextStep = action.step + 1
    return {
      ...state,
      [action.id]: {
        ...state[action.id],
        currentStep: nextStep,
        maxCurrentStep: nextStep,
      }
    }
  }

  if (action.type == GOTO_PREV_STEP) {
    let prevStep = action.step - 1
    return {
      ...state,
      [action.id]: {
        ...state[action.id],
        currentStep: prevStep,
      }
    }
  }

  return state
}

const formDataReducer = (state = {}, action) => {
  if (action.type === UPDATE_SELECTED) 
    return { ...state, [action.id]: {
      [action.key]: action.value,
    }}
  
  return state
}

//COMBINED
export default combineReducers({
  selected: selectedReducer,
  step: stepReducer,
  formData: formDataReducer,
})

//INI ADALAH STATE