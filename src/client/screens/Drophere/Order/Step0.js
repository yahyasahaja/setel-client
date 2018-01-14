//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import { RadioGroup, RadioButton } from "react-toolbox/lib/radio"
import Dropdown from "react-toolbox/lib/dropdown"

//STYLES
import styles from "./css/step0.scss"
import radiotheme from "./css/radio-button-theme.scss"
import dropdowntheme from "./css/dropdown-theme.scss"
import sizetheme from "./css/dropdown-size-theme.scss"
import quantitytheme from "./css/input-quantity-theme.scss"

//COMPONENTS
import RoundedButton from "../../../components/RoundedButton"

//COMPONENT
export default class Step0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      role: "",
      city: "SBY",
      region: "Wonosari",
      postalCode: "",
      category: "",
      productName: "",
      color: "",
      size: "",
      quantity: ""
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

  sizes = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" }
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
            <p>Role</p>
            <RadioGroup
              name="role"
              value={this.state.role}
              onChange={this.handleChange.bind(this, "role")}
            >
              <RadioButton
                theme={radiotheme}
                label="Business Owner"
                value="busowner"
              />
              <RadioButton
                theme={radiotheme}
                label="Management"
                value="management"
              />
              <RadioButton theme={radiotheme} label="Staf" value="staf" />
              <RadioButton theme={radiotheme} label="Others" value="other" />
            </RadioGroup>
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
            <p>Product Category</p>
            <RadioGroup
              name="category"
              value={this.state.category}
              onChange={this.handleChange.bind(this, "category")}
            >
              <RadioButton theme={radiotheme} label="T-Shirt" value="t-shirt" />
              <RadioButton theme={radiotheme} label="Hoodie" value="hoodie" />
              <RadioButton theme={radiotheme} label="Jacket" value="jacket" />
              <RadioButton theme={radiotheme} label="Jersey" value="jersey" />
            </RadioGroup>
            <p className={styles.textmargin}>Product Name</p>
            <RadioGroup
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange.bind(this, "productName")}
            >
              <RadioButton
                theme={radiotheme}
                label="Cotton 30s"
                value="cotton30s"
              />
              <RadioButton
                theme={radiotheme}
                label="Cotton 30s"
                value="cotton40s"
              />
              <RadioButton
                theme={radiotheme}
                label="Cotton 30s"
                value="cotton50s"
              />
              <RadioButton
                theme={radiotheme}
                label="Cotton 30s"
                value="cotton60s"
              />
            </RadioGroup>
            <p className={styles.textmargin}>Base Color</p>
            <Input
              type="text"
              className={styles.postalcodeandcolor}
              name="color"
              label="Base Color"
              value={this.state.color}
              onChange={this.handleChange.bind(this, "color")}
            />
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p>Size</p>
                <Dropdown
                  theme={sizetheme}
                  source={this.sizes}
                  value={this.state.size}
                  onChange={this.handleChange.bind(this, "size")}
                />
                <p className={styles.smalltext}>Add size</p>
              </div>
              <div className={styles.flexitem}>
                <p>Quantity</p>
                <Input
                  type="number"
                  name="quantity"
                  hint="1"
                  theme={quantitytheme}
                  value={this.state.quantity}
                  onChange={this.handleChange.bind(this, "quantity")}
                />
              </div>
            </div>
            <p>Size Guideline</p>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem} />
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>P</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>L</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>M</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>72</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>30</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>L</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>74</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>31</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>XL</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>76</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>32</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>XXL</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>78</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>33</p>
              </div>
            </div>
            <p className={styles.textmargin}>Price Guideline</p>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>M</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>Rp. 70.000/pcs</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>L</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>Rp. 70.000/pcs</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>XM</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>Rp. 70.000/pcs</p>
              </div>
            </div>
            <div className={styles.flexcontainer}>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>XXL</p>
              </div>
              <div className={styles.flexitem}>
                <p className={styles.sizetext}>Rp. 75.000/pcs</p>
              </div>
            </div>
          </form>
        </div>
        <p className={styles.orderformtext}>Order Form</p>
        <hr className ={styles.rowform}/>
        <RoundedButton to="/drophere/order/1" className={styles.button} primary>NEXT</RoundedButton>
      </div>
    );
  }
}
