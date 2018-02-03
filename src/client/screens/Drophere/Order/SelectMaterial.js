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


export default class SelectMaterial extends Component{
    materials = {
        cotton1 : null,
        cotton2 : null,
        cotton3 : null       
    }

    imageList  = () => (
        Object.keys(this.materials).map((key) => {
            <Simg text={key} src={this.materials[key]}/>
        })
    )
            
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.progressBar}>
                    <Progress/>
                </div>                                
                <div className={styles.navigation}>
                        <FontIcon value="keyboard_arrow_left" className={styles.arrow}/>
                            <span>Choose Material</span>
                        <FontIcon value="keyboard_arrow_right" className={styles.arrow}/>
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