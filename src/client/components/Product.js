//MODULES
import React, { Component } from 'react'
import styles from './css/product.scss'
import { CompactPicker } from 'react-color'
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//STYLES
import numbertheme from './css/input-number-theme.scss'

//REACT REDUX
import {updateFormData} from '../services/actions'


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
    {
        name: 'XXL'
    }
]

export class Product extends Component {
    state = {
        sizeS: 0,
        sizeM: 0,
        sizeL: 0,
        sizeXL: 0,
        sizeXXL: 0,
        total: 0
    }

    mappingSize(){
        if(SIZE) return _.map(SIZE, (size) => {
            return <p>{size.name}</p>
        })
    }

    handleChange = (name, value) => {
        this.setState(
            {
                ...this.state, [name]: value
            }
        )
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
                                <CompactPicker />
                            </div>
                            <div className={styles.sizeflex}>
                                {this.mappingSize()}
                                <p></p>
                            </div>
                            <div className={styles.sizeflex + " " + styles.marginsize}>
                                <Input type="number" theme={numbertheme} value={this.state.sizeS} onChange={this.handleChange.bind(this, 'sizeS')} />
                                <Input type="number" theme={numbertheme} value={this.state.sizeM} onChange={this.handleChange.bind(this, 'sizeM')} />
                                <Input type="number" theme={numbertheme} value={this.state.sizeL} onChange={this.handleChange.bind(this, 'sizeL')} />
                                <Input type="number" theme={numbertheme} value={this.state.sizeXL} onChange={this.handleChange.bind(this, 'sizeXL')} />
                                <Input type="number" theme={numbertheme} value={this.state.sizeXXL} onChange={this.handleChange.bind(this, 'sizeXXL')} />
                                <p className={styles.texttotal}>Total: <br />0</p>
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

Product = withRouter(connect(
    state =>({
        colorsize: state.formData.product.drophereOrder
    }),{updateFormData}
)(Product))

export default Product