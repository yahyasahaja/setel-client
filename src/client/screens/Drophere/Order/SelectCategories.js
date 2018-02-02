//MODULES
import React, { Component } from "react"
import Input from "react-toolbox/lib/input"
import _ from 'lodash'
import Dropdown from 'react-toolbox/lib/dropdown'

//STYLES
import styles from './css/select-categories.scss'

//COMPONENTS
import DataDisplay from '../../../components/DataDisplay'
import RoundedButton from '../../../components/RoundedButton'

export default class SelectCategories extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <hr className={styles.row} />
                        <p className={styles.text}>Choose categories</p>
                        <div className={styles.flexcontainer}>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>T-Shirt</p>
                            </div>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>Hoodie</p>
                            </div>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>Jersey</p>
                            </div>
                        </div>
                        <div className={styles.flexcontainer + " " +styles.marginflexcontainer}>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>T-Shirt</p>
                            </div>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>Hoodie</p>
                            </div>
                            <div className={styles.flexitem}>
                                <img src="/img/kids-front-2.png" className={styles.clothes} />
                                <p>Jersey</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}