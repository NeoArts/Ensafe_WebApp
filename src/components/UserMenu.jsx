import React from 'react'
import cookie from 'js-cookie'

function UserMenu() {

    const logOut = () => {
        try {
            var token = cookie.get('token');
            var refreshToken = cookie.get('refreshToken');

            fetch('https://localhost:44305/api/User/verifySesion', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (response.status !== 200) {
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
                                cookie.set("token", dataBody.accessToken);
                                cookie.set("refreshToken", dataBody.refreshToken);

                                token = cookie.get('token');
                                refreshToken = cookie.get('refreshToken');

                                fetch('https://localhost:44305/api/User/logout', {
                                    method: 'DELETE',
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                        "Content-Type": "application/json"
                                    }
                                }).then(response => {
                                    if (response.status === 200) {
                                        cookie.remove('token');
                                        cookie.remove('refreshToken');
                                        cookie.remove('userName');
                                        cookie.remove('userLastName');
                                        cookie.remove('stayLogged');
                                        window.location.reload();
                                    }
                                    else {
                                        console.log('algo ha salido mal');
                                        console.log(response.status);
                                    }
                                })
                            }
                        })
                }
                else {
                    fetch('https://localhost:44305/api/User/logout', {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        if (response.status === 200) {
                            cookie.remove('token');
                            cookie.remove('refreshToken');
                            cookie.remove('userName');
                            cookie.remove('userLastName');
                            cookie.remove('stayLogged');
                            window.location.reload();
                        }
                        else {
                            console.log('lo sentimos, algo ha salido mal');
                            console.log(response.status);
                        }
                    })
                }
            });
        }
        catch (exception) {
            console.log('lo sentimos, algo ha salido mal');
        }
    }

    return (
        <nav className="user-menu">
            <ul className="user-menu__nav">
                <li className="user-menu__item">
                    <a href="#" className="user-menu__link">Favoritos</a>
                </li>
                <li className="user-menu__item">
                    <a href="#" className="user-menu__link">Historial de compras</a>
                </li>
                <li className="user-menu__item">
                    <a href="#" className="user-menu__link">Carrito</a>
                </li>
                <li className="user-menu__item">
                    <button className="user-menu__link" onClick={() => logOut()}>Cerrar sesion</button>
                </li>
            </ul>
        </nav>
    )
}

export default UserMenu
