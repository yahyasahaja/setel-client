//MODULES
import React, { Component } from "react"

//STYLES
import styles from "./css/index.scss"

//COMPONENTS
import RoundedButton from "../../components/RoundedButton"

//COMPONENT
export default class Login extends Component {

  state = {
    showLogin: true,
    showRegister: false
  }
  
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
          <div
            className={styles.flexboxcontainer + " " + styles.ksztat2container}
          >
            <div className={styles.flexboxitem}>
              <img className={styles.rowksztat2} src="/img/kszta-t-2.svg" />
            </div>
          </div>
          <div className={styles.flexboxcontainer}>
            <div className={styles.flexboxitem}>
              <p className={styles.loginandregisterheading}>LOGIN</p>
            </div>
            <div
              className={styles.flexboxitem + " " + styles.flexboxtogglebutton}
            >
              <img src="img/min.svg" className={styles.togglebuttonmin} />
            </div>
          </div>
          <div
            className={
              styles.flexboxcontainer + " " + styles.inputusercontainer
            }
          >
            <div className={styles.flexboxitem}>
              <p className={styles.user}>USER</p>
            </div>
            <div className={styles.flexboxitem}>
              <input className={styles.input} type="text" />
            </div>
          </div>
          <div
            className={
              styles.flexboxcontainer + " " + styles.inputpasswordcontainer
            }
          >
            <div className={styles.flexboxitem}>
              <p className={styles.password}>PASSWORD</p>
            </div>
            <div className={styles.flexboxitem}>
              <input className={styles.input} type="password" />
            </div>
          </div>
          <div
            className={
              styles.flexboxcontainer + " " + styles.signupgoogletextcontainer
            }
          >
            <div className={styles.flexboxitem}>
              <p className={styles.signup}>Sign up with Google</p>
            </div>
          </div>
          <div className={styles.flexboxcontainer}>
            <div className={styles.flexboxitem}>
              <img
                src="img/google.png"
                srcset="img/google@2x.png"
                className={styles.googlelogin}
              />
            </div>
            <div className={styles.flexboxitem + " " + styles.flexlogin}>
              <p className={styles.loginbottom}>LOGIN</p>
            </div>
          </div>
          <div
            className={styles.flexboxcontainer}
          >
            <div className={styles.flexboxitem}>
              <img className={styles.rowksztat22} src="/img/kszta-t-2.svg" />
            </div>
          </div>
          <div className={styles.flexboxcontainer}>
            <div className={styles.flexboxitem + " " + styles.flexlogin}>
              <p className={styles.loginandregisterheading}>REGISTER</p>
            </div>
            <div
              className={styles.flexboxitem + " " + styles.flexboxtogglebutton}
            >
              <img
                src="img/blackcross.svg"
                className={styles.togglebuttoncross}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
