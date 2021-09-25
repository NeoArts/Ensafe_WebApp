import React from 'react'
import logoEnsafe from '../../images/logoSVG.svg'
import cookie from 'js-cookie'
import { motion } from 'framer-motion'

function loginCommand() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', () => {

        var Email = document.getElementById('email').value;
        var Password = document.getElementById('password').value;
        var stayLogged = document.getElementById('stayLogged');

        var loginRequest = { Email, Password };

        try {
            fetch('https://localhost:44305/api/User/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginRequest)
            })
                .then(response => response.text())
                .then(data => {
                    var dataBody = JSON.parse(data);

                    if (stayLogged.checked) {
                        cookie.set("stayLogged", "true");
                    }
                    else {
                        cookie.set("stayLogged", "false");
                    }

                    if (dataBody.errorMessage === null) {
                        cookie.set("token", dataBody.accessToken);
                        cookie.set("refreshToken", dataBody.refreshToken);
                        cookie.set("userName", dataBody.user.userName);
                        cookie.set("userLastName", dataBody.user.userLastName);
                    }
                })
        } catch (exception) {
            alert('Sorry, something when wrong');
        }

    })
}

function LoginComponent() {
    return (
        <div>
            <img src={logoEnsafe} alt="logo-ensafe" className="login-modal__logo" />
            <form className="login-modal__form" id="loginForm">
                <label htmlFor="email" className="login-modal__label">Email</label>
                <input type="email" id="email" className="login-modal__input" required />
                <label htmlFor="password" className="login-modal__label">Contraseña</label>
                <input type="password" id="password" className="login-modal__input" required />
                <input value="Iniciar sesion" type="submit" className="main-button" onClick={loginCommand} />
                <input type="checkbox" id="stayLogged" className="login-modal__check" />
                <label htmlFor="stayLogged" className="login-modal__check-label">Mantener sesión iniciada</label>
            </form>
        </div>
    )
}

export default LoginComponent
