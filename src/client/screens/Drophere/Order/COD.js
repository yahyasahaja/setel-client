//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import FontIcon from 'react-toolbox/lib/font_icon'

//STYLES
import styles from './css/COD.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import ProgressBar from '../../../components/DrophereProgress'
import RoundedButton from '../../../components/RoundedButton'
import OrderNavigation from '../../../components/OrderNavigation'
export default class Cod extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles['progress-bar']}>
                    <ProgressBar />
                </div>
                <div className={styles['navigation']}>
                    <OrderNavigation
                        text="Payment"
                        prevLink="/drophere/order/4"
                        nextLink="/drophere/order/5"
                        rightArrow="hidden"
                    />
                </div>
                <div className={styles.cod}>
                    <div className={styles.message}>
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus voluptatem 
                        blanditiis laboriosam quo, vero ab veniam, alias ducimus nobis omnis dolore molestias reprehenderit,
                        numquam beatae quidem neque optio assumenda!`}
                    </div>
                    <div className={styles.button}>
                        <RoundedButton to="/" primary>
                            Back To Home
                        </RoundedButton>
                    </div>
                </div>
            </div>
        )
        
    }
}