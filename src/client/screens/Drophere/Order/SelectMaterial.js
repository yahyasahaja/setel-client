//MODULES
import React, { Component } from "react"

import Input from "react-toolbox/lib/input"
import Dropdown from 'react-toolbox/lib/dropdown'
import FontIcon from 'react-toolbox/lib/font_icon'

//STYLES
import styles from './css/SelectMaterial.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import Progress from '../../../components/DrophereProgress'
import Simg from  '../../../components/S-ImagePreview'
import OrderNavigation from  '../../../components/OrderNavigation'


export default class SelectMaterial extends Component{
    materials = {
        cotton1 : null,
        cotton2 : null,
        cotton3 : null       
    }

    imageList  = () => (
        <div>                     
            {Object.keys(this.materials).map((key) => {
                <Simg text={key} src={this.materials[key]}/>
            })}
        </div>
    )
            
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.progressBar}>
                    <Progress/>
                </div>                                
                <div>
                    <OrderNavigation 
                      text="Choose Material"
                      nextLink="/drophere/order/2"
                      prevLink="/drophere/order/0"/>
                </div>                
                <div className={styles.materials}>                    
                    <div className={styles.previewMaterials}>                        
                        <Simg />       
                        <Simg />       
                        <Simg />       
                        <Simg />   
                    </div>
                </div>
            </div>
        )
    }
}