//MODULES
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {CompactPicker} from 'react-color'
import {Input} from 'react-toolbox'

//STYLES
import styles from './css/select-color-size.scss'
import numbertheme from './css/input-number-theme.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import SelectMaterial from './SelectMaterial'
import UploadDesign from './UploadDesign'
import DrophereProgress from "../../../components/DrophereProgress"

//REDUX
import {gotoNextStep, updateFormData} from '../../../services/actions'
import store from '../../../services/store'
import {updateDrophereOrderProduct} from '../../../services/drophereOrder'

class SelectColorSize extends Component {
    
    submit = () => {
        let {
            gotoNextStep,
            history
        } = this.props
        gotoNextStep('drophereOrder')
        history.push("/drophere/order/3")
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <DrophereProgress />
                        <div className={styles.flexcontainer}>
                            <Link to="/drophere/order/1">
                                <img src="/img/ic-chevron-left-black-36-dp.png" className={styles.arrow} />
                            </Link>
                            <p className={styles.text}>Choose Material</p>
                            <Link to="/drophere/order/3">
                                <img src="/img/ic-chevron-right-black-36-dp.png" className={styles.arrow} />
                            </Link>
                        </div>
                        <Product 
                            src = "/img/kids-front-2.png"
                            name = "T-Shirt"
                            /> 
                        <div className={styles.centeredbutton}>
                            <RoundedButton className={styles.button} onClick={this.submit} primary>Upload Design</RoundedButton>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const SIZE = [
    {
        name: 'S',
    },
    {
        name: 'M'
    },
    {
        name: 'L'
    },
    {
        name: 'XL'
    },
]


class Product extends Component {

    mappingSize(){
        if(SIZE) return _.map(SIZE, (size) => {
            return <p>{size.name}</p>
        })
    }  
    
    

    valueWhenChange = (key, value) => {
        let product = this.props.products
        return(
            { 
                ...product.size,
                [key]:value
            }
        )

    }

    setValue = (id, key, value) => {
        let {
            updateDrophereOrderProduct,
        } = this.props

        updateDrophereOrderProduct(id, 'size', this.valueWhenChange(key, value))
    }

    valueColorWhenChange = (color, event) =>{
        product = this.props.products
        return({
                ...product.color,
                color
        })
    }

    setColor = (id, color, event) =>{
        let {
            updateDrophereOrderProduct
        } = this.props

        updateDrophereOrderProduct(id, 'color', this.valueColorWhenChange(color,event))
    }

    

    render() {

        return (
            <div>
                <div className={styles.colorsizewrapper}>
                    <div className={styles.colorsizecontent}>
                        <div className={styles.clotheswrapper}>
                            <img src={this.props.src} className={styles.clothes} />
                        </div>
                        <div className={styles.choosecolorsizewrapper}>
                            <div className={styles.tshirtflex}>
                                <p>{this.props.name}</p>
                                <div></div>
                                <img src="/img/cross.svg" className={styles.close} />
                            </div>
                            <div>
                                <CompactPicker  onChange={this.valueColorWhenChange.bind(this)} onChangeComplete = {this.setColor.bind(this)} />
                            </div>
                            <div className={styles.sizeflex}>
                                {this.mappingSize()}
                                <p></p>
                            </div>
                            <div className={styles.sizeflex + " " + styles.marginsize}>
                                {/* <Input type="number" theme={numbertheme}  onChange={this.setValue.bind(this, 's')} /> */}
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                        this.setValue(0, 's', value)
                                    }} 
                                    value = { this.props.products[0] && this.props.products[0].size ? this.props.products[0].size.s : 0}
                                />
                                <Input type="number" theme={numbertheme}  onChange={ value => {
                                    this.setValue(0, 'm', value)
                                }}
                                    value = {this.props.products[0] && this.props.products[0].size ? this.props.products[0].size.m : 0}
                                 />
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                    this.setValue(0, 'l', value)
                                }}
                                    value = {this.props.products[0] && this.props.products[0].size ? this.props.products[0].size.l : 0}
                                 />
                                 <Input type="number" theme={numbertheme}  onChange={value => {
                                    this.setValue(0, 'xl', value)
                                }}
                                    value = {this.props.products[0] && this.props.products[0].size ? this.props.products[0].size.xl : 0}
                                 />
                                <p className={styles.texttotal}>Total: <br /></p>
                            </div>
                            <div>
                                <p className={styles.italictext}>Size Chart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.addupload}>
                    <img src="/img/blackcross.svg" className={styles.add} />
                    <p className={styles.addtext}>Add another product</p>
                </div>
            </div>
        )
    }
}

SelectColorSize = withRouter(connect(null, {gotoNextStep})(SelectColorSize))
Product = withRouter(connect(
    state =>({
        products: state.formData.drophereOrder ? state.formData.drophereOrder.products : {}
    }),{updateDrophereOrderProduct, gotoNextStep})
(Product))
export default SelectColorSize