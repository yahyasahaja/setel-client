//MODULES
import React, { Component } from "react";

//STYLES
import styles from "./css/index.scss";

//COMPONENT
export default class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginareacolor}>
          <div className={styles.flexboxcontainer}>
            <div className={styles.flexboxitem} />
            <div className={styles.flexboxitem}>
              <img className={styles.logo} src="/img/logo.png" />
            </div>
            <div className={styles.flexboxitem} />
          </div>
          <div className={styles.flexboxcontainer+''+styles.ksztat2container}>
            <div className={styles.flexboxitem}>
              <img className={styles.rowksztat2} src="/img/kszta-t-2.svg" />
            </div>
          </div>
          <div className={styles.flexboxcontainer}>
            <div className={styles.flexboxitem}>
              <p className={styles.login}>LOGIN</p>
            </div>
            <div className={styles.flexboxitem}>
              <img src="img/min.svg" className={styles.togglebutton} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
