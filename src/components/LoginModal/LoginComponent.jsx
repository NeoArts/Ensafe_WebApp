import React from 'react'
import logoEnsafe from '../../images/logoSVG.svg'
import cookie from 'js-cookie'
import { motion } from 'framer-motion'

function LoginComponent() {
    return (
        <div>
            <img src={logoEnsafe} alt="logo-ensafe" className="login-modal__logo" />
            <form className="login-modal__form" id="loginForm">
                <label htmlFor="email" className="login-modal__label">Email</label>
                <input type="email" id="email" className="login-modal__input" required />
                <label htmlFor="password" className="login-modal__label">Contraseña</label>
                <input type="password" id="password" className="login-modal__input" required />
                <input value="Iniciar sesion" type="submit" className="main-button" />
                <input type="checkbox" id="stayLogged" className="login-modal__check" />
                <label htmlFor="stayLogged" className="login-modal__check-label">Mantener sesión iniciada</label>
            </form>
        </div>
    )
}

export default LoginComponent
