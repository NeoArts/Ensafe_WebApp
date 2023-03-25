import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

function BackDrop(handleClose) {

    const [modalMessage, setModalMessage] = useState({
        message: '¿Aún no estás registrado?',
        action: 'Registrate'
    });

    const [showLoginComponent, setLoginComponent] = useState(true);
    const [showRegisterComponent, setRegisterComponent] = useState(false);

    const changeUserComponent = () => {
        if (showLoginComponent) {
            setModalMessage({
                message: '¿Ya tienes una cuenta?',
                action: 'Inicia sesión'
            });
            setLoginComponent(false);
            setRegisterComponent(true);
        }
        else {
            setModalMessage({
                message: '¿Aún no estás registrado?',
                action: 'Registrate'
            });
            setLoginComponent(true);
            setRegisterComponent(false);
        }
    }


    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: "100vh",
            opacity: 0
        }
    }

    return (
        <motion.div className="backdrop"
            onClick={handleClose.handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            <motion.div className="login-modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}>
                {showLoginComponent && <LoginComponent />}
                {showRegisterComponent && <RegisterComponent />}
                <p className="login-modal__redirection">{modalMessage.message}<br />{modalMessage.action} <button style={{ color: '#2A2E92', fontWeight: 'bold' }} className="login-modal__redirection-link no-border" onClick={changeUserComponent}>aquí</button></p>
            </motion.div>
        </motion.div>
    )
}

export default BackDrop
