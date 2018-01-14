//MODULES
import React, { Component } from "react"
import _ from 'lodash'

//STYLES
import styles from "./css/step2.scss"

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

//INNER_CONFIG
const DATA = [
  { name: 'Name', value: 'Zain Fikri' },
  { name: 'Phone', value: 'Zain Fikri' },
  { name: 'Email', value: 'Zain Fikri' },
  { name: 'Company, Role', value: 'Zain Fikri' },
  { name: 'Shipping Address', value: 'Zain Fikri' },
  { name: 'Product Category', value: 'Zain Fikri' },
  { name: 'Product Name', value: 'Cotton 30s' },
  { name: 'Size and Quality', value: <div className={styles.sizequality}>
    <div className={styles.size}><span>M</span><span>10</span></div>
    <div className={styles.size}><span>L</span><span>20</span></div>
    <div className={styles.size}><span>XL</span><span>9</span></div>
  </div> },
  { name: 'Total Cost', value: 'Zain Fikri' },
  { name: 'Payment Method', value: 'Zain Fikri' },
]

//COMPONENT
export default class Drophere extends Component {
  renderContent() {
    if (DATA) return _.map(DATA, (data, i) => {
      return <DataDisplay name={data.name} value={data.value} key={i} />
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <form>
        <div className={styles.up}>
          <div className={styles.content}>
            {this.renderContent()}
          </div>

          <div className={styles.info}>
            <h1>Checkout Order</h1>
          </div>
        </div>

        <div className={styles.down}>
          <RoundedButton to="/drophere/order/1" className={styles.button}>BACK</RoundedButton>
          <RoundedButton to="/drophere/order/3" className={styles.button} primary>NEXT</RoundedButton>
        </div>
        </form>
      </div>
    )
  }
}
