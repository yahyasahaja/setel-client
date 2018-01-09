//MODULES
import React, { Component }  from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//STYLES
import styles from './css/index.scss'

//COMPONETNS
import Step0 from './Step0'

//REDUX_ACTIONS
import actions from '../../../services/actions'

//CONFIG
import { DROPHERE_STEP } from '../../../config'

//COMPONENT
class Order extends Component {
  componentWillMount() {
    //init drophere step with current step at 0 and the maximum step is at step 2
    this.props.initStep(DROPHERE_STEP, 0, 2)
  }

  shouldComponentUpdate(nextProps, nextState) {
    //If there's no any current match and [DROPHERE_STEP] props, just let it update
    if (!this.props.match || !nextProps.match) return true
    if (!this.props[DROPHERE_STEP] || !nextProps[DROPHERE_STEP]) return true

    let orderStepIdOnURL = nextProps.match.params.orderId
    let step = nextProps[DROPHERE_STEP]

    if (orderStepIdOnURL > step.maxCurrentStep) {
      //If url order id is more than current page, goto page 0 and don't update props
      this.props.history.push(`/drophere/order/${step.currentStep}`)
      return false
    }

    return true
  }

  render() {
    return (
      <div className={styles.container}>
      {/* Another components such as background, menu, header, footer, etc */}

      <Switch>
        <Route path="/drophere/order/0" component={Step0} />
        <Route path="/drophere/order/1" component={Step0} />
        <Route path="/drophere/order/2" component={Step0} />
      </Switch>

      {/* Another components such as background, menu, header, footer, etc */}
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