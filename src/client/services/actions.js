//MODULES
import axios from 'axios'
//import { endpointURL } from 'config'

//TYPES
export const UPDATE_SELECTED = 'updateSelected'
export const UPDATE_STEP = 'updateCurrentStep'
export const GOTO_NEXT_STEP = 'gotoNextStep'
export const GOTO_PREV_STEP = 'gotoNextStep'
export const INIT_STEP = 'initStep'
export const UPDATE_FORM_DATA = 'updateFormData'

//ACTIONS
//selected
export const updateSelected = (id, selected) => ({ type: UPDATE_SELECTED, id, selected })

//step
export const updateCurrentStep = (id, step) => ({ type: UPDATE_CURRENT_STEP, id, step })
export const gotoNextStep = id => ({ type: GOTO_NEXT_STEP, id })
export const gotoPrevStep = id => ({ type: GOTO_PREV_STEP, id })
export const initStep = (id, currentStep, maxStep, maxCurrentStep) => (
  { type: INIT_STEP, id, init: {
    currentStep,
    maxCurrentStep: maxCurrentStep || currentStep,
    maxStep,
  }}
)

//formData
export const updateFormData = (id, key, value) => ({
  type: UPDATE_FORM_DATA,
  key,
  value
})

//BUNDLE_IT!
export default {
  //TYPES
  UPDATE_SELECTED,
  UPDATE_CURRENT_STEP,
  GOTO_NEXT_STEP,
  GOTO_PREV_STEP,
  INIT_STEP,
  UPDATE_FORM_DATA,

  //ACTIONS
  updateSelected,
  updateCurrentStep,
  gotoNextStep,
  gotoPrevStep,
  initStep,
  updateFormData,
}