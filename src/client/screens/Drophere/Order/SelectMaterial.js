//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import Dropdown from 'react-toolbox/lib/dropdown'
import FontIcon from 'react-toolbox/lib/font_icon'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { gotoNextStep, updateFormData } from '../../../services/actions'
import { 
    // updateDrophereOrderProduct,
    updateDrophereOrder
} from '../../../services/drophereOrder'

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
        cotton1 : '/img/kids-front-2.png',
        cotton2 : '/img/kids-front-2.png',
        cotton3 : '/img/kids-front-2.png'       
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
                    if(key == (this.props.material)){                        
                        return {
                            border: "1px solid #37347a"
                        }
                    }
                  })()                    
                }/>
        )        
    )

    submit = (value) => {
        let { 
            // updateDrophereOrderProduct , 
            updateDrophereOrder,
            gotoNextStep,
            history,             
        } = this.props
            // updateDrophereOrderProduct(0, "material_id", value)
            updateDrophereOrder("base_material", value)
            gotoNextStep("drophereOrder")
            history.push("/drophere/order/2")
             
    }
            
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
                        {this.imageList()}
                    </div>
                </div>
            </div>
        )
    }
}

SelectMaterial = withRouter(connect(
    state => {        
        material: state.formData.drophereOrder ? state.formData.drophereOrder.base_material : {}
    }, { 
        gotoNextStep, 
        updateDrophereOrder
        // updateDrophereOrderProduct  
    }
)(SelectMaterial))

export default SelectMaterial
