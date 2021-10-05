import React from 'react'
import logoEnsafe from '../../images/logoSVG.svg'
import cookie from 'js-cookie'

function registerCommand() {
    var loginForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', () => {

        var errorResponse = document.getElementById('error');
        var Email = document.getElementById('email').value;
        var Name = document.getElementById('name').value;
        var LastName = document.getElementById('lastName').value;
        var Phone = document.getElementById('phone').value;
        var Password = document.getElementById('password').value;
        var ConfirmPassword = document.getElementById('confirmPassword').value;

        if (!Phone.match(/^[0-9]+$/)) {
            errorResponse.innerHTML = 'Ingresa un numero válido';
        }
        else {
            var registerRequest = { Email, Name, LastName, Phone, Password, ConfirmPassword };

            try {
                fetch('https://localhost:44305/api/User/register', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(registerRequest)
                })
                    .then(response => response.text())
                    .then(
                        data => {
                            var dataBody = JSON.parse(data);
                            var error = dataBody.errorMessage;

                            if(error !== null){
                                if (error === undefined) {
                                    error = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número';
                                }
    
                                errorResponse.innerHTML = error;
                            }
                            else{
                                cookie.set("stayLogged", "false");
                                cookie.set("token", dataBody.accessToken);
                                cookie.set("refreshToken", dataBody.refreshToken);
                                cookie.set("userName", dataBody.user.userName);
                                cookie.set("userLastName", dataBody.user.userLastName);
                                window.location.reload();
                            }
                        }
                    ).catch(() => {
                        console.log("Error de conexión con el servidor");
                    })
            } catch (exception) {
                alert('Lo sentimos, algo salió mal');
            }
        }

    })
}

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
                <input value="Registrar" type="submit" className="main-button" onClick={registerCommand} />
            </form>
            <p className="login-modal__error" id="error"></p>
        </div>
    )
}

export default RegisterComponent
