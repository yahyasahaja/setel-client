//MODULES
import React, { Component } from "react"
import _ from "lodash"
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'


//STYLES
import styles from "./css/payment.scss"

//COMPONENTS
import DataDisplay from "../../../components/DataDisplay"
import RoundedButton from "../../../components/RoundedButton"
import DrophereProgress from "../../../components/DrophereProgress";

//ACTIONS
import { gotoNextStep, updateFormData } from '../../../services/actions'
import {updateDrophereOrderProduct} from '../../../services/drophereOrder'

//COMPONENT
class Payment extends Component {
  renderPayment() {
    if (paymentinfo) return _.map(paymentinfo, (data, i) => {
      return <DataDisplay value={data.value} key={i} />
    })
  }

  submit = () =>{
    let {
      gotoNextStep,
      history
    } = this.props
    gotoNextStep('drophereOrder')
    history.push('/drophere/order/7')
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <DrophereProgress/>
          <div className={styles.payment}>
            <Link to="/drophere/order/5">
              <img src="/img/ic-chevron-left-black-36-dp.png" className={styles.arrow} />
            </Link>
            <p className={styles.text}>Payment</p>
            <div></div>
          </div>
          <div className={styles.contentflex}>
            <p>Order number: #0097</p>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>Checkout Successful</p>
            <p className={styles.text}>Complete The Payment</p>
            <p className={styles.text + ' ' + styles.margintext}>Total cost to be paid</p>
            {/* <p className={styles.cost}>Rp. { this.props.payment && Object.values(this.props.payment[0].size).reduce((total, nextValue) => total + nextValue)} </p> */}
            <p className={styles.cost}>Rp. XXXXXX </p>
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
          <RoundedButton onClick = {this.submit} className={styles.button} primary>Confirmation</RoundedButton>
        </div>
      </div >
    )
  }
}

Payment = withRouter(connect(
  state => ({
    payment: state.formData.drophereOrder
  }), { gotoNextStep }
)(Payment))

export default Payment