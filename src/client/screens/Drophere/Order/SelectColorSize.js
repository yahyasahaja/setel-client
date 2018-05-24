//MODULES
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {CompactPicker} from 'react-color'
import { Input, Button} from 'react-toolbox'

//STYLES
import styles from './css/select-color-size.scss'
import numbertheme from './css/input-number-theme.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import SelectMaterial from './SelectMaterial'
import UploadDesign from './UploadDesign'
import OrderNavigation from  '../../../components/OrderNavigation'
import DrophereProgress from "../../../components/DrophereProgress"

//REDUX
import {gotoNextStep, updateFormData} from '../../../services/actions'
import store from '../../../services/store'
import { 
    updateDrophereOrderProduct, 
    updateDrophereOrderProductSize,
    deleteDrophereOrderProduct
} from '../../../services/drophereOrder'

class SelectColorSize extends Component {
    
    submit = () => {
        this.props.gotoNextStep('drophereOrder')
        this.props.history.push("/drophere/order/3")
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <DrophereProgress />
                        <OrderNavigation 
                            text="Choose Material"
                            nextLink="/drophere/order/3"
                            prevLink="/drophere/order/1"
                        />                        
                        <Products /> 
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

class Products extends Component {

    renderProduct(){
        let { products = [] } = this.props
        return products.map((products, id) =>  
            <Product 
                src = "/img/kids-front-2.png"
                name = "T-Shirt"
                products={products}
                id={id}
            />
        ) 
    }
    
    render(){
        let { 
            updateDrophereOrderProduct,
            products = [], 
            material,
            category
        } = this.props
        return (
            <div>
                <div>
                    { this.renderProduct() }
                </div>
                <div className={styles.addupload}>
                    <Button 
                      icon='add' 
                      label='Add Product' 
                      flat primary 
                      onClick={ () => {
                        updateDrophereOrderProduct( products.length, 'material_id', material)
                        updateDrophereOrderProduct( products.length, 'category_id', category)
                      }}/>
                </div>
            </div>
        )
    }
}

class Product extends Component {

    mappingSize(){
        if(SIZE) return _.map(SIZE, (size) => {
            return <p>{size.name}</p>
        })
    }  

    setValue = (id, key, value) => {
        let {
            updateDrophereOrderProductSize
        } = this.props

        updateDrophereOrderProductSize(id, key, value)
    }

    setColor = (id, value) =>{
        let {
            updateDrophereOrderProduct
        } = this.props

        updateDrophereOrderProduct(id, 'color', value)
    }    

    render() {
        let { products, id } = this.props        
        return (
            <div className={styles.productContainer}>
                <div className={styles.colorsizewrapper}>
                    <div className={styles.colorsizecontent}>
                        <div className={styles.clotheswrapper}>
                            <img src={this.props.src} className={styles.clothes} />
                        </div>
                        <div className={styles.choosecolorsizewrapper}>
                            <div className={styles.tshirtflex}>
                                <p>{this.props.name}</p>                                
                                <img 
                                    src="/img/cross.svg" 
                                    style={{ cursor: "pointer"}}
                                    className={styles.close} 
                                    onClick = {() => this.props.deleteDrophereOrderProduct(id)}
                                />
                            </div>
                            <div>
                                <CompactPicker color={products ? products.color : ''}     
                                            onChangeComplete={color => {
                                    this.setColor(id, color.hex)
                                    }} />
                            </div>
                            <div className={styles.sizeflex}>
                                {this.mappingSize()}
                                <p></p>
                            </div>
                            <div className={styles.sizeflex + " " + styles.marginsize}>                                
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                        this.setValue(id, 's', value)
                                    }} 
                                    value = { products.size ? products.size.s : 0 }
                                />
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                        this.setValue(id, 'm', value)
                                    }} 
                                    value = { products.size ?  products.size.m : 0 }
                                />
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                        this.setValue(id, 'l', value)
                                    }} 
                                    value = { products.size ? products.size.l : 0 }
                                />
                                <Input type="number" theme={numbertheme}  onChange={value => {
                                        this.setValue(id, 'xl', value)
                                    }} 
                                    value = { products.size ? products.size.xl : 0 }
                                />
                                <p className={styles.texttotal}>Total: <br />
                                {
                                    products ? products.size ? 
                                        Number.parseInt(products.size.s || "0") + 
                                        Number.parseInt(products.size.m || "0") +
                                        Number.parseInt(products.size.l || "0") + 
                                        Number.parseInt(products.size.xl || "0") 
                                        : 0 : 0
                                }
                                </p>
                            </div>
                            <div>
                                <p className={styles.italictext}>Size Chart</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

SelectColorSize = withRouter(connect(null, { gotoNextStep } )(SelectColorSize))
Products = withRouter(connect(
    state => ({
        products: state.formData.drophereOrder ? state.formData.drophereOrder.products : [],
        material: state.formData.drophereOrder ? state.formData.drophereOrder.base_material: '',
        category: state.formData.drophereOrder ? state.formData.drophereOrder.base_category: '',
    }), {
        updateDrophereOrderProduct,         
    })(Products)
)
Product = withRouter(connect(
    // state =>({
    //     products: state.formData.drophereOrder ? state.formData.drophereOrder.products : [],        
    // })
    null ,{
        updateDrophereOrderProduct,   
        deleteDrophereOrderProduct,      
        updateDrophereOrderProductSize
    })
(Product))


export default SelectColorSize