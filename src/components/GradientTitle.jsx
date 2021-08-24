import React, { Component } from 'react'

class GradientTitle extends Component {
    render() {
        return (
            <div className="title-gradient-background">
                <h3 className="title-gradient__title">{this.props.title}</h3>
            </div>
        )
    }
}


export default GradientTitle
