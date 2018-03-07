//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import {connect} from 'react-redux'

//STYLES
import styles from './css/select-categories.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'


//STORE
import * as actions from '../../../services/actions'
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
        return CATEGORY_EXAMPLE.map((data, i) => {
            return (
                <div>
                    <img src={data.img} className={styles.clothes} />
                    <p>{data.name}</p>
                </div>
            )
        })
    }

    render() {
        this.props.updateFormData('drophere', 0, {
            categoryId: 0
        })
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <DrophereProgress/>
                        <p className={styles.text}>Choose categories</p>
                        <div className={styles.flexcontainer}>
                            {this.renderCategories()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
 return {
     formData: state.formData
 }
}, actions)(SelectCategories)