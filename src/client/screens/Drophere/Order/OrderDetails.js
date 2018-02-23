//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import { RadioGroup, RadioButton } from "react-toolbox/lib/radio"
import Dropdown from "react-toolbox/lib/dropdown"
import { Link } from "react-router-dom"

//STYLES
import styles from "./css/order-details.scss"
import radiotheme from "./css/radio-button-theme.scss"
import dropdowntheme from "./css/dropdown-theme.scss"
import sizetheme from "./css/dropdown-size-theme.scss"
import quantitytheme from "./css/input-quantity-theme.scss"

//COMPONENTS
import RoundedButton from "../../../components/RoundedButton"

//COMPONENT
export default class OrderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      role: "",
      city: "SBY",
      region: "Wonosari",
      postalCode: "",
      paymentMethod: "",
    }
  }

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

  handleChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <hr className={styles.row} />
          <div className={styles.quoteflex}>
            <Link to="/drophere/order/3">
              <img src="/img/ic-chevron-left-black-36-dp.png" className={styles.arrow} />
            </Link>
            <p className={styles.text}>Get a quote</p>
            <Link to="/drophere/order/5">
              <img src="/img/ic-chevron-right-black-36-dp.png" className={styles.arrow} />
            </Link>
          </div>
          <form className={styles.form}>
            <Input
              type="text"
              name="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
            />
            <Input
              type="tel"
              name="phone"
              label="Phone"
              value={this.state.phone}
              onChange={this.handleChange.bind(this, "phone")}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
            />
            <Input
              type="text"
              name="company"
              label="Company"
              value={this.state.company}
              onChange={this.handleChange.bind(this, "company")}
            />
            <p className={styles.textmargin}>Shipping Address</p>
            <p className={styles.text}>City</p>
            <Dropdown
              theme={dropdowntheme}
              source={this.cities}
              value={this.state.city}
              onChange={this.handleChange.bind(this, "city")}
            />
            <p className={styles.text}>Region</p>
            <Dropdown
              theme={dropdowntheme}
              source={this.regions}
              value={this.state.region}
              onChange={this.handleChange.bind(this, "region")}
            />
            <Input
              type="text"
              className={styles.postalcodeandcolor}
              name="postalCode"
              label="Postal Code"
              value={this.state.postalCode}
              onChange={this.handleChange.bind(this, "postalCode")}
            />
            <p>Payment Method</p>
            <RadioGroup
              name="category"
              value={this.state.paymentMethod}
              onChange={this.handleChange.bind(this, "paymentMethod")}
            >
              <RadioButton theme={radiotheme} label="COD" value="cod" />
              <RadioButton theme={radiotheme} label="Bank Transfer" value="transfer" />
            </RadioGroup>
            <div className={styles.flexbutton}>
              <RoundedButton to="/drophere/order/5" primary className={styles.button}>Go To Payment</RoundedButton>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
