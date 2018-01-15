//MODULES
import React, { Component } from "react"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'

//STYLES
import styles from "./css/step5.scss"

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

//COMPONENT
export default class Drophere extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bankName: "Mandiri"
    }
  }

  handleChange = (value) => {
    this.setState({
      bankName: value
    })
  }

  bank = [
    { value: "Mandiri", name: "Mandiri" },
    { value: "BCA", name: "BCA" },
    { value: "BNI", name: "BNI" },
    { value: "BTN", name: "BTN" }
  ]

  DATA = [
    { name: <p>Order Number</p>, value: <p>#0097</p> },
    { name: <p>To Bank Account</p>, value: () => {<Dropdown source={this.bank} value={this.state.bankName} onChange={this.handleChange} />} }
  ]

  renderContent() {
    if (this.DATA) return _.map(this.DATA, (data, i) => {
      return <DataDisplay name={data.name} value={typeof data.value=== 'function'? data.value():data.value} key={i} />
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
      </div>
    )
  }
}
