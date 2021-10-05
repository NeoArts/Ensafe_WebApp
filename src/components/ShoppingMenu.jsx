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

    const verifyUser = () => {
        var stayLogged = cookie.get('stayLogged');

            var token = cookie.get('token');
            var refreshToken = cookie.get('refreshToken');
            userName = cookie.get('userName');

            try {
                fetch('https://localhost:44305/api/User/verifySesion', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    if (response.status !== 200) {
                        console.log("CAMBIANDO TOKEN");
                        var RefreshToken = refreshToken;
                        var refreshRequest = { RefreshToken };
                        fetch('https://localhost:44305/api/User/refresh', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(refreshRequest)
                        }).then(response => response.text())
                            .then(data => {
                                var dataBody = JSON.parse(data);
                                if (dataBody.errorMessage === null) {
                                    if(stayLogged === 'true'){
                                        cookie.set("token", dataBody.accessToken);
                                        cookie.set("refreshToken", dataBody.refreshToken);
                                        console.log('Nuevo token establecido');
    
                                        setUserSesion(true);
                                    }
                                    else{
                                        fetch('https://localhost:44305/api/User/logout', {
                                            method: 'DELETE',
                                            headers: {
                                                Authorization: `Bearer ${dataBody.accessToken}`,
                                                "Content-Type": "application/json"
                                            }
                                        }).then(() => {
                                            cookie.remove('token');
                                            cookie.remove('refreshToken');
                                            cookie.remove('userName');
                                            cookie.remove('userLastName');
                                            cookie.remove('stayLogged');
                                            console.log("Sesión expirada");
                                        }) 
                                    }
                                }
                            })
                    }
                    else {
                        setUserSesion(true);
                    }
                });
                
            }
            catch (exception) {
                console.log('Lo sentimos, ha ocurrido un error');
            }
    }

    useEffect(() => {
        verifyUser();
    }, [])

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
