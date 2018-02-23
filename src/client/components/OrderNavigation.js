import React from 'react'
import { connect } from 'react-redux'
import { 
    gotoNextStep,
    gotoPrevStep
} from '../services/actions'
import { Link } from 'react-router-dom'
import FontIcon from 'react-toolbox/lib/font_icon'
import styles from './css/OrderNavigation.scss'
import { DROPHERE_STEP } from '../config'

const Navigation = ({
    text = 'Step ....',
    prevLink = '',
    nextLink = '',
    leftArrow = 'visible',
    rightArrow = 'visible',      
  }) => (
    <div className={styles['order-navigation']}>
        <Link 
          to={prevLink}
          onClick={() => gotoPrevStep('orderNavigation')}>
            <FontIcon 
                value="keyboard_arrow_left" 
                className={styles.arrow}
                style={
                    {
                      visibility: leftArrow
                    }
                }
            />
        </Link>        
        <span>{text}</span>
        <Link 
          to={nextLink}          
          onClick={() => {              
              gotoNextStep('orderNavigation')
              }
          }>
            <FontIcon 
                value="keyboard_arrow_right" 
                className={styles.arrow}
                style={
                    {
                    visibility: rightArrow
                    }
                }
            />
        </Link>        
    </div>    
)

const OrderNavigation = connect(
    (store, props) => {
        return {
            step: store.step.drophereOrder,
            props
        }
    },    
    {
        gotoPrevStep,
        gotoNextStep
    }
)(Navigation)

export default OrderNavigation