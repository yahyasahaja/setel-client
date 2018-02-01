//MODULES
import React, { Component } from "react"
import _ from "lodash"

//STYLES
import styles from "./css/step4.scss"

//COMPONENTS
import DataDisplay from "../../../components/DataDisplay"
import RoundedButton from "../../../components/RoundedButton"

//COMPONENT
export default class Payment extends Component {
  renderPayment() {
    if (paymentinfo) return _.map(paymentinfo, (data, i) => {
      return <DataDisplay value={data.value} key={i} />
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.infoflex}>
          <h1>Payment</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.contentflex}>
            <p>Order number: #0097</p>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>Checkout Successful</p>
            <p className={styles.text}>Complete The Payment</p>
            <p className={styles.smallertext}>Remaining time of your payment</p>
            <p className={styles.time}>05 : 59 : 50</p>
            <p className={styles.text + ' ' + styles.margintext}>Total cost to be paid</p>
            <p className={styles.cost}>Rp. 2.800.000</p>
            <p className={styles.text + ' ' + styles.margintext}>Please transfer to the following Setel's bank account number</p>
            <div className={styles.bank}>
              <img />
              <p className={styles.text}>Lowokwaru</p>
              <p className={styles.text + ' ' + styles.accnumber}>165 524 789 26</p>
              <p className={styles.nomargin}>PT. Setel</p>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <RoundedButton className={styles.button} to="/drophere/order/5" primary>CONFIRMATION</RoundedButton>
        </div>
      </div >
    )
  }
}