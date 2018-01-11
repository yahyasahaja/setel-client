//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/rounded-button.scss'

//COMPONENT
export default class RoundedButton extends Component {
  renderButton() {
    if (this.props.to) return <Link
      to={this.props.to}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </Link>

    return <button 
      type={this.props.type || 'submit'}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </button>
  }

  render() {
    return (
      <div className={styles.container} >
        {this.renderButton()}
      </div>
    )
  }
}