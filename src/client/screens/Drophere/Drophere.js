//MODULES
import React, { Component } from "react";

//STYLES
import styles from "./css/drophere.scss";

//COMPONENTS
import DrophereMenu from "../../components/DrophereMenu";
import RoundedButton from "../../components/RoundedButton";

//COMPONENT
export default class Drophere extends Component {
  render() {
    return (
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

          <RoundedButton
            to="/drophere/order/0"
            className={styles.button}
            primary
          >
            ORDER
          </RoundedButton>
        </div>
      </div>
    );
  }
}
