import React from 'react'
import { Component } from 'react'
import { motion } from 'framer-motion'
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
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/" className="menu__link">Inicio</Link>
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/products" className="menu__link">Productos</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/pqrs" className="menu__link">PQRS</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/privacy-policy" className="menu__link">Política de privacidad</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/contact-us" className="menu__link">Contáctenos</Link>
                            </motion.button>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu
