//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/footer.scss'

//COMPONENT
export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container} >
        <div className={styles.up}>
          <div className={styles['logo-wrapper']} >
            <img src="/img/drop-here.png" alt="Logo"/>
          </div>

          <div className={styles.menu}>
            <Link to="/drophere">SETEL DROPHERE</Link>
            <Link to="/store">SETEL STORE</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

          <div className={styles.medsos}>
            <a href="https://facebook.com" className="fa fa-instagram" aria-hidden="true" />
            <a href="https://facebook.com" className="fa fa-twitter" aria-hidden="true" />
            <a href="https://facebook.com" className="fa fa-facebook" aria-hidden="true" />
            <a href="https://facebook.com" className="fa fa-linkedin" aria-hidden="true" />
          </div>
        </div>

        <div className={styles.down}>
          <span>Copyright &copy; 2018 Setel. All rights reserved</span>
        </div>
      </div>
    )
  }
}