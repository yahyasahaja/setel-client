//MODULES
import React, { Component } from "react";
import Input from "react-toolbox/lib/input";
import {RadioGroup, RadioButton } from 'react-toolbox/lib/radio';

//STYLES
import styles from "./css/step0.scss";

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
      city: "",
      region: "",
      postalcode: "",
      category: "",
      productname: "",
      color: "",
      size: "",
      quantity: ""
    };
  }

  handleChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper} />
        <form>
          <Input type="text" name="name" label="Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
          <Input type="tel" name="phone" label="Phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')}/>
          <Input type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
          <Input type="text" name="company" label="Company" value={this.state.company} onChange={this.handleChange.bind(this, 'company')}/>
          <p>Role</p>
          <RadioGroup name="role" value={this.state.role} onChange={this.handleChange.bind(this, 'role')}>
            <RadioButton label ="Business Owner" value="busowner"/>
            <RadioButton label ="Management" value="management"/>
            <RadioButton label ="Staf" value="staf"/>
            <RadioButton label ="Others" value="other"/>
          </RadioGroup>
          <p>Shipping Address</p>
            
        </form>
      </div>
    );
  }
}
