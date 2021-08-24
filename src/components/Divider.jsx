import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const scrollWindow = (id) => {
    switch (id) {
        case "our-products-divider":
            window.scroll({
                top: document.getElementById("our-products").offsetTop - document.getElementById("nav").clientHeight,
                behavior: 'smooth'
            });
            break;
        case "who-we-are-divider":
            window.scroll({
                top: document.getElementById("who-we-are").offsetTop - document.getElementById("nav").clientHeight,
                behavior: 'smooth'
            });
            break;
        case "mission-vision-divider":
            window.scroll({
                top: document.getElementById("mission-vision").offsetTop - document.getElementById("nav").clientHeight,
                behavior: 'smooth'
            });
            break;
        case "company-divider":
            window.scroll({
                top: document.getElementById("company").offsetTop - document.getElementById("nav").clientHeight,
                behavior: 'smooth'
            });
            break;
        case "up-divider":
            window.scroll({
                top: document.getElementById("featured-product").offsetTop - document.getElementById("nav").clientHeight,
                behavior: 'smooth'
            });
            break;
    }
}

class Divider extends Component {

    render() {
        return (
            <div>
                <div className={"divider " + this.props.className} id={this.props.id} style={{ color: this.props.color }} onClick={() => scrollWindow(this.props.id)}>
                    <div className="divider__container">
                        <h2 className="divider__title">{this.props.title}</h2>
                        <FontAwesomeIcon icon={this.props.up ? faSortUp : faSortDown} style={this.props.up ? { marginTop: '0.7em' } : {}} size='2x' className='divider__icon' id="divider__icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Divider
