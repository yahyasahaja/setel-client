//MODULES
import React, { Component } from "react"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import Input from 'react-toolbox/lib/input'
import { connect } from 'react-redux'
import { updateFormData, gotoNextStep } from '../../../services/actions'
import { withRouter } from 'react-router-dom'
import { Snackbar } from 'react-toolbox'

//STYLES
import styles from "./css/Confirmation.scss"

//COMPONENTS
import ProgressBar from '../../../components/DrophereProgress'
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

//COMPONENT



class ConfirmationPayment extends Component {  

  state = {
    snackbar: false
  }

  handleSnackbar = () => {    
    this.setState({
      ...this.state,
      snackbar: !this.state.snackbar
    })
  }

  bank = [
    { value: "Mandiri", label: "Mandiri" },
    { value: "BCA", label: "BCA" },
    { value: "BNI", label: "BNI" },
    { value: "BTN", label: "BTN" }
  ]

  DATA = [
    { 
      name: <p>Order Number</p>, 
      value: <p className={styles.text}>{
        this.props.confirmation ? this.props.confirmation.confirmation_orderNumber : '007'
      }</p> 
    },
    { 
      name: <p>To Bank Account</p>, 
      value: () => 
      <Dropdown source={this.bank} 
        required={true}
        value={this.props.confirmation ? this.props.confirmation.confirmation_toBank : ''} 
        onChange={(value) => (
          this.props.updateFormData('drophereOrder', 'confirmation_toBank', value)
        )} /> 
      },
    { 
      name: <p>From Bank Account</p>, 
      value: () => (
        <Input 
          required={true}
          type="text" 
          value={this.props.confirmation ? this.props.confirmation.confirmation_fromBank : ''}
          onChange={(value) => (
            this.props.updateFormData('drophereOrder', 'confirmation_fromBank', value)
          )} /> 
      )
    },
    { 
      name: <p>Account Name</p>, 
      value: () => (
        <Input 
          required={true}
          type="text" 
          value={this.props.confirmation ? this.props.confirmation.confirmation_accountName : ''} 
          onChange={(value) => (
            this.props.updateFormData('drophereOrder', 'confirmation_accountName', value)            
          )}          
        /> 
      )
    },
  ]

  renderContent() {
    if (this.DATA) return _.map(this.DATA, (data, i) => {
      return (
        <DataDisplay 
          name={data.name}
          value={typeof data.value === 'function' ? data.value() : data.value} 
          key={i} 
        />
      )        
    })
  }

  submit = () => {
    let { confirmation : form = '' } = this.props                               
    if(form.confirmation_toBank &&
       form.confirmation_fromBank &&
       form.confirmation_accountName) {                    
        this.props.gotoNextStep('drophereOrder')                    
        this.props.history.push("/drophere/order/8")
      }
    this.handleSnackbar();        
    return;
  }

  render() {
    return (
      <div className={styles.container}>        
        <div className={styles.navigation}>
          Confirmation Payment
        </div>
        <div className={styles.content}>
          {this.renderContent()}
          {/* <Dropdown source={this.bank} value={this.state.bankName} onChange={this.handleChange} /> */}
        </div>        
        <div className={styles.captha}>
          Ini Ceritanya Captha
        </div>
        <div className={styles.down}>
          <RoundedButton 
            className={styles.button}             
            primary                        
            onClick={this.submit}
            >Confirm</RoundedButton>                      
        </div>
        <div>
        <Snackbar          
          active={this.state.snackbar}
          label = "Uncomplete Form"
          action = "Got It !"
          timeout = "2000"
          onTimeout = {this.handleSnackbar}
          onClick = {this.handleSnackbar}
          type = "warning"
        />      
        </div>
      </div>
    )
  }
}


const Confirmation = withRouter(connect(
  state => ({
    confirmation: state.formData.drophereOrder,    
  }),  
  { updateFormData, gotoNextStep }  
)(ConfirmationPayment))

export default Confirmation
