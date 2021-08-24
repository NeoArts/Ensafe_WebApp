import React from 'react'
import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Homepage from './Homepage'
import Productspage from './ProductsPage'
import Pqrspage from './PqrsPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import ContactUs from './ContactUs'

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
                {/* <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/products">
                        <Productspage />
                    </Route>
                    <Route exact path="/pqrs">
                        <Pqrspage />
                    </Route>
                    <Route exact path="/privacy-policy">
                        <PrivacyPolicyPage />
                    </Route>
                    <Route exact path="/contact-us">
                        <ContactUs />
                    </Route>
                </Switch> */}
            </div>
        )
    }
}

export default Menu
