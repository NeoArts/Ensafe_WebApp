import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { mainMenuOptions } from '../../../constants/page_data.js'

const Menu = ({open, className, mobileScreen}) => {

    function closeMenu(){
        var menu = document.getElementById('menu-icon');

        if(menu !== null && window.innerWidth <= 1108 && !menu.classList.contains("open")){
            menu.click();
        }
    }

    return (
        <div className="nav__menu">
            <nav>
                <ul className={"menu " + ((open) ? ((mobileScreen) ? "open expanded-menu " : "open ") : "close ") + className} id="menu">
                {Array.from(mainMenuOptions).map((item, index) => {
                        return (
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border " + (className === "" ? "menu-vertical" : "")}>
                                <Link to={item.link} className="menu__link" onClick={closeMenu}>{item.name}</Link>
                            </motion.button>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Menu
