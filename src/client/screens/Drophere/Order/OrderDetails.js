//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import { RadioGroup, RadioButton } from "react-toolbox/lib/radio"
import Dropdown from "react-toolbox/lib/dropdown"
import { Link } from "react-router-dom"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

//STYLES
import styles from "./css/order-details.scss"
import radiotheme from "./css/radio-button-theme.scss"
import dropdowntheme from "./css/dropdown-theme.scss"
import sizetheme from "./css/dropdown-size-theme.scss"
import quantitytheme from "./css/input-quantity-theme.scss"

//COMPONENTS
import RoundedButton from "../../../components/RoundedButton"
import DrophereProgress from "../../../components/DrophereProgress";

//ACTIONS
import {gotoNextStep, updateFormData} from '../../../services/actions'
import {updateDrophereOrderAddress} from '../../../services/drophereOrder'

//COMPONENT
class OrderDetails extends Component {

  submit = () => {
    let {
      gotoNextStep,
      history
    } = this.props
    gotoNextStep('drophereOrder')
    history.push('drophereOrder/5')
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <DrophereProgress />
          <div className={styles.quoteflex}>
            <Link to="/drophere/order/3">
              <img src="/img/ic-chevron-left-black-36-dp.png" className={styles.arrow} />
            </Link>
            <p className={styles.text}>Get a quote</p>
            <Link to="/drophere/order/5">
              <img src="/img/ic-chevron-right-black-36-dp.png" className={styles.arrow} />
            </Link>
          </div>
          <Order />
          <div className={styles.flexbutton}>
            <RoundedButton onClick={this.submit} primary className={styles.button}>Go To Payment</RoundedButton>
          </div>
        </div>
      </div>
    )
  }
}

export class Order extends Component {

  cities = [
    { value: "SBY", label: "Surabaya" },
    { value: "MLG", label: "Malang" },
    { value: "JKT", label: "Jakarta" },
    { value: "MKS", label: "Makassar" }
  ]

  regions = [
    { value: "Wonosari", label: "Wonosari" },
    { value: "Wonokromo", label: "Wonokromo" },
    { value: "Simpang", label: "Simpang" }
  ]

  handleChange = (key, value) => {
    let { gotoNextStep, updateFormData, history } = this.props

    console.log(updateFormData('drophereOrder', key, value))
  }

  render() {
    return (
        <form className={styles.form}>
          <Input
            type="text"
            name="name"
            label="Name"
            value = {this.props.order.name}
            onChange={ value => {
              this.handleChange('name', value)
            }}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone"
            value = {this.props.order.phone}
            onChange={ value => {
              this.handleChange('phone', value)
            }}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            value = {this.props.order.email}
            onChange={ value => {
              this.handleChange('email', value)
            }}
          />
          <Input
            type="text"
            name="organization"
            label="Organization"
            value = {this.props.order.organization}
            onChange={ value => {
              this.handleChange('organization', value)
            }}
          />
          <Input
            type="text"
            name="detail_address"
            label="Shipping Address"
            value = {this.props.order.address ? this.props.order.address.detail_address : ''}
            onChange={ value => {
              console.log(this.props.updateDrophereOrderAddress('detail_address', value))
            }}
          />
          <p className={styles.text}>City</p>
          <Dropdown
            theme={dropdowntheme}
            source={this.cities}
            value = {this.props.order.address ? this.props.order.address.city : ''}
            onChange = { (value) => (
               console.log(this.props.updateDrophereOrderAddress('city', value))
            )}
          />
          <p className={styles.text}>Province</p>
          <Dropdown
            theme={dropdowntheme}
            source={this.regions}
            value = {this.props.order.address ? this.props.order.address.province : ''}
            onChange = { value => (
              console.log(this.props.updateDrophereOrderAddress('province', value))
            )}
          />
          <Input
            type="text"
            className={styles.postalcodeandcolor}
            name="postalCode"
            label="Postal Code"
            value = {this.props.order.address ? this.props.order.address.zipCode : ''}
            onChange = { value => (
              console.log(this.props.updateDrophereOrderAddress('zipCode', value))
            )}

          />
          <p>Payment Method</p>
          <RadioGroup
            name="payment_method"
            value = {this.props.order ? this.props.order.payment_method : ''}
            onChange = { value => {
              this.handleChange('payment_method', value)
            }}
          >
            <RadioButton theme={radiotheme} label="COD" value="cod" />
            <RadioButton theme={radiotheme} label="Bank Transfer" value="transfer" />
          </RadioGroup>
          
        </form>
      
    )
  }
}

OrderDetails = withRouter(connect(null, {gotoNextStep})(OrderDetails))
Order = withRouter(connect(
  state => ({
    order: state.formData.drophereOrder? state.formData.drophereOrder : {}
  }),{gotoNextStep, updateFormData, updateDrophereOrderAddress}
)(Order))
export default OrderDetails