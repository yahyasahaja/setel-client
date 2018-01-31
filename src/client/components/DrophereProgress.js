//MODULES
import React, { Component }  from 'react'
import { connect } from 'react-redux'

//STYLES
import styles from './css/drophere-progress.scss'

//CONFIG
import { DROPHERE_STEP } from '../../../config'

//COMPONENT
class DrophereProgress extends Component {
  render() {
    return (
      <div className={styles.container}>

      </div>
    )
  }
}

export default connect(state => {
  //mapStateToProps
  return {
    [DROPHERE_STEP]: state.step[DROPHERE_STEP],
  }
}, actions)(DrophereProgress)