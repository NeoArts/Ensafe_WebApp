import React from 'react'
import { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class Menu extends Component {

    render() {

        return (
            <div>
                <div>
                    <nav>
                        <ul className={"menu " + this.props.className} id="menu">
                            <li className={"menu__item " + this.props.modificator}>
                                <Link to="/" className="menu__link">Inicio</Link>
                            </li>
                            <li className={"menu__item " + this.props.modificator}>
                                <Link to="/products" className="menu__link">Productos</Link>
                            </li>
                            <li className={"menu__item " + this.props.modificator}>
                                <Link to="/pqrs" className="menu__link">PQRS</Link>
                            </li>
                            <li className={"menu__item " + this.props.modificator}>
                                <Link to="/privacy-policy" className="menu__link">Política de privacidad</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/contact-us" className="menu__link">Contáctenos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu
