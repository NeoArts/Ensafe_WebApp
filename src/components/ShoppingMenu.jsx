import React, { useState, useEffect } from 'react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import BackDrop from './LoginModal/BackDrop';
import cookie from 'js-cookie'
import UserMenu from './UserMenu';


function ShoppingMenu() {

    const [modalLoginOpen, setModalLoginOpen] = useState(false);
    const [openUserSesion, setUserSesion] = useState(false);
    var userName = null;

    const close = () => {
        setModalLoginOpen(false);
    }
    const open = () => {
        setModalLoginOpen(true);
    }

    return (
        <nav className="shopping-menu">
            <ul className="shopping-menu__nav">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="shopping-menu__item no-border d-flex">
                    <FaShoppingCart size='18px' />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="no-border shopping-menu__item d-flex"
                    onClick={() => (modalLoginOpen ? close() : open())}
                    style={{ color: '#2a2e92' }}>
                    <FaUserAlt size='18px' />
                    {openUserSesion && <p className="shopping-menu__username">{cookie.get('userName')}</p>}
                </motion.button>
                {modalLoginOpen && openUserSesion && <UserMenu />}
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}>
                    {modalLoginOpen && !openUserSesion && <BackDrop modalLoginOpen={modalLoginOpen} handleClose={close} />}
                </AnimatePresence>
            </ul>
        </nav>
    )
}

export default ShoppingMenu
