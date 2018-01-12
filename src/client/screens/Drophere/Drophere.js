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
        <div className={styles.flexboxcontainer}>
          <div className={styles.flexboxitem}>
            <img className={styles.imglogo} src={"/img/drop-here.png"} />
          </div>
        </div>
        <div className={styles.flexboxcontainer}>
          <div className={styles.flexboxitem}>
            <p className={styles.textdrophere}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.flexboxcontainer}>
          <div className={styles.flexboxitem}>
            <RoundedButton
              style={{
                width: 165,
                paddingBottom: 178,
                marginLeft: 612,
                marginRight: 589,
                marginTop: 98
              }}
              to="/drophere/order/0"
            >
              <p className={styles.order}>ORDER</p>
            </RoundedButton>
          </div>
        </div>
      </div>
    );
  }
}
