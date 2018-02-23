//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'

//STYLES
import styles from './css/Completed.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

export default class Completed extends Component{
    render(){
        return(
            <div className={styles.container}>                
                <div className={styles.navigation}>
                    Completed
                </div>
                <div className={styles.content}>
                    <div className={styles.message}>
                        <p>Terima Kasih Pesanan Anda akan segera di proses</p>
                        <p>Untuk informasi atau pertanyaan lebih lanjut silahkan hubungi admin</p>
                    </div>
                    <div className={styles['button-container']}> 
                        <RoundedButton to="/">
                            Back To Home
                        </RoundedButton>
                    </div>
                </div>
            </div>            
        )
    }
}