//MODULES
import React, { Component } from "react"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import Input from 'react-toolbox/lib/input'

//STYLES
import styles from "./css/step5.scss"

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

//COMPONENT
export default class Confirmation extends Component {
  state = {
    bankName: "Mandiri",
    bankAccount: "",
    accountName: ""
  }

  handleChange = (name, value) => {
    this.setState({
      ...this.state, [name]: value
    })
  }

  bank = [
    { value: "Mandiri", label: "Mandiri" },
    { value: "BCA", label: "BCA" },
    { value: "BNI", label: "BNI" },
    { value: "BTN", label: "BTN" }
  ]

  DATA = [
    { name: <p>Order Number</p>, value: <p className={styles.text}>#0097</p> },
    { name: <p>To Bank Account</p>, value: () => <Dropdown source={this.bank} value={this.state.bankName} onChange={this.handleChange.bind(this, "bankName")} /> },
    { name: <p>From Bank Account</p>, value: () => <Input type="text" value={this.state.bankAccount} onChange={this.handleChange.bind(this, "bankAccount")} /> },
    { name: <p>Account Name</p>, value: () => <Input type="text" value={this.state.accountName} onChange={this.handleChange.bind(this, "accountName")} /> },

  ]

  renderContent() {
    if (this.DATA) return _.map(this.DATA, (data, i) => {
      return <DataDisplay name={data.name} value={typeof data.value === 'function' ? data.value() : data.value} key={i} />
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {this.renderContent()}
          </div>
        </div>
        <div className={styles.down}>
          <RoundedButton className={styles.button} to="/drophere/order/6" primary>SUBMIT</RoundedButton>
        </div>
      </div>
    )
  }
}
