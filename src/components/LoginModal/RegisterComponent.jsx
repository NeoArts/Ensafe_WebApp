import React from 'react'
import logoEnsafe from '../../images/logoSVG.svg'
import cookie from 'js-cookie'

function RegisterComponent() {
    return (
        <div>
            <img src={logoEnsafe} alt="logo-ensafe" className="login-modal__logo" />
            <form className="login-modal__form" id="registerForm">
                <label htmlFor="email" className="login-modal__label">Email</label>
                <input type="email" id="email" className="login-modal__input" required />
                <label htmlFor="name" className="login-modal__label">Nombre</label>
                <input type="text" id="name" className="login-modal__input" required />
                <label htmlFor="lastName" className="login-modal__label">Apellidos</label>
                <input type="text" id="lastName" className="login-modal__input" required />
                <label htmlFor="phone" className="login-modal__label">Teléfono (opcional)</label>
                <input type="tel" id="phone" className="login-modal__input" />
                <label htmlFor="password" className="login-modal__label">Contraseña</label>
                <input type="password" id="password" className="login-modal__input" required />
                <label htmlFor="confirmPassword" className="login-modal__label">Confirmar contraseña</label>
                <input type="password" id="confirmPassword" className="login-modal__input" required />
                <input value="Registrar" type="submit" className="main-button" />
            </form>
            <p className="login-modal__error" id="error"></p>
        </div>
    )
}

export default RegisterComponent
