//MODULES
import React, { Component } from 'react'

//STYLES
import styles from './css/floating-menu.scss'

//COMPONENT
export default class FloatingMenu extends Component {
  render() {
    return (
      <div className={styles.container} >
        {this.props.children}
      </div>
    )
  }
}