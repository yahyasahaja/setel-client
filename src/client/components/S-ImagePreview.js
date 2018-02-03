import React, { Component } from 'react'

import styles from './css/S-ImagePreview.scss'

export default class Spreview extends Component{

    render(){
        let {
            text = 'image caption',             
            src = 'http://s.id/1aTc', 
            alt = 'no image reference'            
        } = this.props

        return (
            <div className={styles.imageGroup}>
                <div className={styles.imageWrapper}>                
                    <img src={src} alt={alt} />
                </div>
                <div className={styles.imageLabel}>
                    {text}
                </div>
            </div>
        )
    }
}
