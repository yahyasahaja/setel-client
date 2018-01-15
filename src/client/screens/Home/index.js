//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import Header from './Header'
import Footer from '../../components/Footer'

//COMPONENT
export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} >
        <Header />
        
        <Footer />
      </div>
    )
  }
}