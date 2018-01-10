//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/drophere.scss'

//COMPONENTS
import DrophereMenu from '../../components/DrophereMenu'

//COMPONENT
export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <DrophereMenu />
      </div>
    )
  }
}