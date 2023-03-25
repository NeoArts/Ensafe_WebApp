import React, { Component } from 'react'
import styles from './gradienttitle.module.css'

class GradientTitle extends Component {
    render() {
        return (
            <div className={styles.title_gradient_background}>
                <h3 className={styles.title_gradient__title}>{this.props.title}</h3>
            </div>
        )
    }
}


export default GradientTitle
