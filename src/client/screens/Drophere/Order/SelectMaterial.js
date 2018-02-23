//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import Dropdown from 'react-toolbox/lib/dropdown'
import FontIcon from 'react-toolbox/lib/font_icon'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { gotoNextStep, updateFormData } from '../../../services/actions'

//STYLES
import styles from './css/SelectMaterial.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import Progress from '../../../components/DrophereProgress'
import Simg from  '../../../components/S-ImagePreview'
import OrderNavigation from  '../../../components/OrderNavigation'


class SelectMaterial extends Component{        

    materials = {
        cotton1 : 'http://s.id/1aTc',
        cotton2 : 'http://s.id/1aTc',
        cotton3 : 'http://s.id/1aTc'       
    }

    imageList  = () => (                        
        Object.keys(this.materials).map((key) => 
            <Simg 
                text={key} 
                src={this.materials[key]} 
                onClick={() => {
                    this.submit(key)                    
                }}
                style={(() => {
                    if(key == (this.props.material ? this.props.material.material : '' )){                        
                        return {
                            border: "1px solid #37347a"
                        }
                    }
                  })()                    
                }/>
        )        
    )

    submit = (key) => {
        let { 
            updateFormData, 
            gotoNextStep,
            history,             
        } = this.props
            
            console.log(updateFormData("drophereOrder", "material", key))
            gotoNextStep("drophereOrder")
            history.push("/drophere/order/2")
             
    }
            
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.progressBar}>
                    <Progress/>
                </div>                                
                <div onClick={this.eta}>
                    <OrderNavigation 
                      text="Choose Material"
                      nextLink="/drophere/order/2"
                      prevLink="/drophere/order/0"/>
                </div>                
                <div className={styles.materials}>                    
                    <div className={styles.previewMaterials}>                        
                        {this.imageList()}
                    </div>
                </div>
            </div>
        )
    }
}

SelectMaterial = withRouter(connect(
    state => ({
        material: state.formData.drophereOrder,        
    }),
    { gotoNextStep, updateFormData }
)(SelectMaterial))

export default SelectMaterial
