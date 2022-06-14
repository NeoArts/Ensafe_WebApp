import React from 'react'
import { Component } from 'react'
import { motion } from 'framer-motion'
import {
    Link
} from 'react-router-dom'

class Menu extends Component {

    render() {

        function closeMenu(){
            var menu = document.getElementById('menu-icon');

            if(menu !== null && window.innerWidth <= 1108 && !menu.classList.contains("open")){
                menu.click();
            }
        }

        return (
            <div>
                <div>
                    <nav>
                        <ul className={"menu " + this.props.className} id="menu">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/" className="menu__link" onClick={closeMenu}>Inicio</Link>
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/products/PRV" className="menu__link" onClick={closeMenu}>Portafolio general</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/pqrs" className="menu__link" onClick={closeMenu}>PQRS</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/privacy-policy" className="menu__link" onClick={closeMenu}>Política de privacidad</Link>
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + this.props.modificator}>
                                <Link to="/contact-us" className="menu__link" onClick={closeMenu}>Contáctenos</Link>
                            </motion.button>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu
