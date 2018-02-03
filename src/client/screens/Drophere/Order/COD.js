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

export default class Cod extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles['progress-bar']}>
                    <ProgressBar />
                </div>
                <div className={styles['navigation']}>
                    <FontIcon value="keyboard_arrow_left" className={styles.arrow}/>
                        <span>Payment</span>
                    <FontIcon value="keyboard_arrow_right" className={styles.arrow}/>
                </div>
                <div className={styles.cod}>
                    <div className={styles.message}>
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus voluptatem 
                        blanditiis laboriosam quo, vero ab veniam, alias ducimus nobis omnis dolore molestias reprehenderit,
                        numquam beatae quidem neque optio assumenda!`}
                    </div>
                    <div className={styles.button}>
                        <RoundedButton to="/">
                            Back To Home
                        </RoundedButton>
                    </div>
                </div>
            </div>
        )
        
    }
}