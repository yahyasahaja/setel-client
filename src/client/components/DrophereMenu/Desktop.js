//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//STYLES
import styles from './css/desktop.scss'

//COMPONENTS
import RoundedButton from '../RoundedButton'

//CONFIG
import { TOKEN, END_POINT_URL } from '../../config'

//COMPONENT
export default class Desktop extends Component {
  componentWillMount() {
    if (localStorage.getItem(TOKEN))
      axios.get('/json/example-user').then(res => {
        this.setState({user: res.data.user})
      })
  }

  state = {
    user: null,
  }

  renderUserMenu() {
    if (!this.state.user) return <div className={styles['no-user']} >
      <RoundedButton to="/register">SIGN UP</RoundedButton>
      <RoundedButton to="/login">SIGN IN</RoundedButton>
    </div>

    return <div className={styles.user}>

    </div>
  }

  render() {
    return (
      <div className={styles.container} >
        <div className={styles['logo-wrapper']}>
          <img src="/img/drop-here.png" alt="Logo"/>
        </div>

        <div className={styles.menu}>
          <Link to="/drophere">SETEL DROPHERE</Link>
          <Link to="/store">SETEL STORE</Link>
        </div>

        {this.renderUserMenu()}
      </div>
    )
  }
}