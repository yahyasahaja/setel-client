//MODULES
import React, { Component } from 'react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import FloatingMenu from '../FloatingMenu'
import Footer from '../Footer'
import Desktop from './Desktop'

//COMPONENT
export default class DrophereMenu extends Component {
  render() {
    return (
      <div className={styles.container} >
        <FloatingMenu>
          <Desktop />
        </FloatingMenu>

        <Footer />
      </div>
    )
  }
}