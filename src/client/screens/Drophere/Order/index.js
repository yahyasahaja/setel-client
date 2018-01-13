//MODULES
import React, { Component }  from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//STYLES
import styles from './css/index.scss'

//COMPONETNS
import Step0 from './Step0'
import Step1 from './Step1'

//REDUX_ACTIONS
import actions from '../../../services/actions'

//CONFIG
import { DROPHERE_STEP } from '../../../config'

//COMPONENT
class Order extends Component {
  componentWillMount() {
    //init drophere step with current step at 0 and the maximum step is at step 2
    //this.props.initStep(DROPHERE_STEP, 0, 2)
  }

  componentWillReceiveProps(nextProps) {
    //If there's no any current match and [DROPHERE_STEP] props, just let it update)
    let orderStepIdOnURL = nextProps.match.params.orderId
    let step = nextProps[DROPHERE_STEP]

    if (!step) return
    
    if (orderStepIdOnURL > step.maxCurrentStep)
    this.props.history.push(`/drophere/order/${step.maxCurrentStep}`)
  }

  render() {
    return (
      <div className={styles.container}>
      <Switch>
        <Route path="/drophere/order/0" exact component={Step0} />
        <Route path="/drophere/order/1" exact component={Step1} />
        <Route path="/drophere/order/2" exact component={Step0} />
      </Switch>
      </div>
    )
  }
}

export default connect(state => {
  //mapStateToProps
  return {
    [DROPHERE_STEP]: state.step[DROPHERE_STEP],
  }
}, actions)(Order)