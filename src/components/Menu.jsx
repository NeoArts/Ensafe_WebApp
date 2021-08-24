import React from 'react'
import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

class Menu extends Component {

    render() {

        const history = createBrowserHistory({ forceRefresh: true })

        const redirectPage = (number) => {
            switch (number) {
                case (0):
                    history.push('/')
                    break;
                case (1):
                    history.push('/products')
                    break;
                case (2):
                    history.push('/pqrs')
                    break;
                case (3):
                    history.push('/privacy-policy')
                    break;
                case (4):
                    history.push('/contact-us')
                    break;
            }
        }

        return (
            <Router>
                <nav>
                    <ul className={"menu " + this.props.className} id="menu">
                        <li className={"menu__item " + this.props.modificator}>
                            <Link to="/" className="menu__link" onClick={() => redirectPage(0)}>Inicio</Link>
                        </li>
                        <li className={"menu__item " + this.props.modificator}>
                            <Link to="/products" className="menu__link" onClick={() => redirectPage(1)}>Productos</Link>
                        </li>
                        <li className={"menu__item " + this.props.modificator}>
                            <Link to="/pqrs" className="menu__link" onClick={() => redirectPage(2)}>PQRS</Link>
                        </li>
                        <li className={"menu__item " + this.props.modificator}>
                            <Link to="/privacy-policy" className="menu__link" onClick={() => redirectPage(3)}>Política de privacidad</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/contact-us" className="menu__link" onClick={() => redirectPage(4)}>Contáctenos</Link>
                        </li>
                    </ul>
                </nav>
            </Router>
        )
    }
}

export default Menu
