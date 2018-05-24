//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//STYLES
import styles from './css/select-categories.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import Simg from '../../../components/S-ImagePreview'
import OrderNavigation from  '../../../components/OrderNavigation'

//ACTION REDUX
import { gotoNextStep, updateFormData } from '../../../services/actions'
import { 
    // updateDrophereOrderProduct,
    updateDrophereOrder
} from '../../../services/drophereOrder'

//STORE
import DrophereProgress from "../../../components/DrophereProgress";

const CATEGORY_EXAMPLE = [
    {
        id: 0,
        img: '/img/kids-front-2.png',
        name: 'T-Shirt'
    },
    {
        id: 1,
        img: '/img/kids-front-2.png',
        name: 'Hoodie'
    },
    {
        id: 2,
        img: '/img/kids-front-2.png',
        name: 'Jersey'
    },
    {
        id: 3,
        img: '/img/kids-front-2.png',
        name: 'T-Shirt'
    },
    {
        id: 4,
        img: '/img/kids-front-2.png',
        name: 'Hoodie'
    },
    {
        id: 5,
        img: '/img/kids-front-2.png',
        name: 'Jersey'
    },
]

class SelectCategories extends Component {
    renderCategories() {
        if(CATEGORY_EXAMPLE) return _.map(CATEGORY_EXAMPLE, (data) => {
        return <Simg
                text={data.name}
                src={data.img}
                key = {data.id}
                onClick={()=>this.submit(data)}
                style={(() => {
                    if (data == (this.props.category ? this.props.category.category : '' )){
                        return {
                            border: '1px solid #37347a'
                        }
                    }
                })()
            }/>
        }) 
    }

    submit(data){
        let {
            // updateDrophereOrderProduct,
            updateDrophereOrder,
            goToNextStep,
            history
        } = this.props
        // updateDrophereOrderProduct(0, 'category_id', data)
        updateDrophereOrder('base_category', data.id)
        gotoNextStep("drophereOrder")
        history.push("/drophere/order/1")
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <DrophereProgress/>
                        <OrderNavigation 
                            text="Choose Categories"
                            nextLink="/drophere/order/1"
                            prevLink="/drophere/order/0"
                            leftArrow = 'hidden'                            
                        />
                        {/* <p className={styles.text}>Choose categories</p> */}
                        <div className={styles.flexcontainer}>
                            {this.renderCategories()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SelectCategories = withRouter(connect(
    state => ({
        category: state.formData.drophereOrder
    }), {
        gotoNextStep, 
        // updateDrophereOrderProduct
        updateDrophereOrder
    })
(SelectCategories))

export default SelectCategories