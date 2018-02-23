//MODULES
import React, { Component } from "react";

//STYLES
import styles from "./css/data-display.scss";

//COMPONENTS

//COMPONENT
export default class DataDisplay extends Component {
  render() {
    let { name, value } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{value}</div>
      </div>
    )
  }
}
