//MODULES
import React, { Component } from "react";

//STYLES
import styles from "./css/drophere.scss";

//COMPONENTS
import RoundedButton from "../../components/RoundedButton";
import DrophereMenu from '../../components/DrophereMenu'
import Footer from '../../components/Footer'

//COMPONENT
export default class Drophere extends Component {
  render() {
    return (
      <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={"/img/drop-here.png"} />
          </div>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            commodo consequat.
          </p>

        <RoundedButton to="/drophere/order/0" className={styles.button} primary>ORDER</RoundedButton>
        </div>
      </div>
      <Footer />
      <DrophereMenu />
      </div>
    )
  }
}
