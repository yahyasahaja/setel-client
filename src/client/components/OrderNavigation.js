import React from 'react'
import { connect } from 'react-redux'
import { 
    gotoNextStep,
    gotoPrevStep
} from '../services/actions'
import { Link } from 'react-router-dom'
import FontIcon from 'react-toolbox/lib/font_icon'
import styles from './css/OrderNavigation.scss'


const Navigation = ({
    text = 'Step ....',
    prevLink = '',
    nextLink = '',
    leftArrow = 'visible',
    rightArrow = 'visible',
    id,
    next,
    prev,
    action 
  }) => (
    <div className={styles['order-navigation']}>
        <Link 
          to={prevLink}
          onClick={prev(id)}>
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
          onClick={next(id, action)}>
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
            id: store.id,
            props
        }
    },    
    dispatch => {
        return {
            next: (id, action = {type: ''}) => {
                dispatch(gotoNextStep(id))
                dispatch(action)
            },
            prev: id => {
                dispatch(gotoPrevStep(id))
            },                       
        }
    }
)(Navigation)

export default OrderNavigation