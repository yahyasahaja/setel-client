//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'
import { CompactPicker } from 'react-color'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/select-color-size.scss'
import numbertheme from './css/input-number-theme.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'
import SelectMaterial from './SelectMaterial'
import UploadDesign from './UploadDesign'
import DrophereProgress from "../../../components/DrophereProgress";

export default class SelectColorSize extends Component {
    state = {
        sizeS: 0,
        sizeM: 0,
        sizeL: 0,
        sizeXL: 0,
        sizeXXL: 0,
        total: 0
    }
    handleChange = (name, value) => {
        this.setState(
            {
                ...this.state, [name]: value
            }
        )
    }

    setTotalSize = () => {
        this.setState(
            {
                total: this.state.sizeS + this.state.sizeM + this.state.sizeL + this.state.sizeXL + this.state.sizeXXL
            }
        )
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
                        <div className={styles.colorsizewrapper}>
                            <div className={styles.colorsizecontent}>
                                <div className={styles.clotheswrapper}>
                                    <img src="/img/kids-front-2.png" className={styles.clothes} />
                                </div>
                                <div className={styles.choosecolorsizewrapper}>
                                    <div className={styles.tshirtflex}>
                                        <p>T-Shirt</p>
                                        <div></div>
                                        <img src="/img/cross.svg" className={styles.close} />
                                    </div>
                                    <div>
                                        <CompactPicker />
                                    </div>
                                    <div className={styles.sizeflex}>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                        <p></p>
                                    </div>
                                    <div className={styles.sizeflex + " " + styles.marginsize}>
                                        <Input type="number" theme={numbertheme} value={this.state.sizeS} onChange={this.handleChange.bind(this, 'sizeS')} />
                                        <Input type="number" theme={numbertheme} value={this.state.sizeM} onChange={this.handleChange.bind(this, 'sizeM')} />
                                        <Input type="number" theme={numbertheme} value={this.state.sizeL} onChange={this.handleChange.bind(this, 'sizeL')} />
                                        <Input type="number" theme={numbertheme} value={this.state.sizeXL} onChange={this.handleChange.bind(this, 'sizeXL')} />
                                        <Input type="number" theme={numbertheme} value={this.state.sizeXXL} onChange={this.handleChange.bind(this, 'sizeXXL')} />
                                        <p className={styles.texttotal}>Total: <br/>0</p>
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
                        <div className={styles.centeredbutton}>
                            <RoundedButton className={styles.button} to="/drophere/order/3" primary>Upload Design</RoundedButton>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}