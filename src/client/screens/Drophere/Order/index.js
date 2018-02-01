//MODULES
import React, { Component }  from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//STYLES
import styles from './css/index.scss'

//COMPONETNS
import SelectCategories from './SelectCategories'
import SelectMaterial from './SelectMaterial'
import SelectColorSize from './SelectColorSize'
import UploadDesign from './UploadDesign'
import OrderDetails from './OrderDetails'
import Cod from './COD'
import Payment from './Payment'
import Confirmation from './Confirmation'
import Completed from './Completed'
import Menu from '../../../components/DrophereMenu/Desktop'


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
      <div className={styles.preview}>
        Preview..
      </div>

      <div className={styles['content-wrapper']}>
      <Menu />
      <div className={styles.content}>
      <Switch>
        <Route path="/drophere/order/0" exact component={SelectCategories} />
        <Route path="/drophere/order/1" exact component={SelectMaterial} />
        <Route path="/drophere/order/2" exact component={SelectColorSize} />
        <Route path="/drophere/order/3" exact component={UploadDesign} />
        <Route path="/drophere/order/4" exact component={OrderDetails} />
        <Route path="/drophere/order/5" exact component={Cod} />
        <Route path="/drophere/order/6" exact component={Payment}/>
        <Route path="/drophere/order/7" exact component={Confirmation}/>
        <Route path="/drophere/order/8" exact component={Completed}/>
      </Switch>
      </div>
      </div>
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