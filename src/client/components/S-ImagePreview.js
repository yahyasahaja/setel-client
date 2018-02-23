import React, { Component } from 'react'

import styles from './css/S-ImagePreview.scss'

export default class Spreview extends Component{

    render(){
        let {
            text = 'image caption',             
            src = 'http://s.id/1aTc', 
            alt = 'no image reference',                                    
            onClick,
            style
        } = this.props

        return (
            <div style={style} className={styles.imageGroup} onClick={onClick}>
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
