//MODULES
import React, { Component }  from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//STYLES
import styles from './css/index.scss'

//COMPONETNS
import Drophere from './Drophere'
import Order from './Order'

//COMPONENT
export default class MainDrophere extends Component {
  render() {
    return (
      <div className={styles.container}>
      <Switch> 
        <Route path="/drophere/order/:orderId" component={Order} />
        <Route path="/drophere" component={Drophere} />
      </Switch>
      </div>
    )
  }
}