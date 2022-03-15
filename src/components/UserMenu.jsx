import React from 'react'
import cookie from 'js-cookie'

function UserMenu() {
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
                    <button className="user-menu__link">Cerrar sesion</button>
                </li>
            </ul>
        </nav>
    )
}

export default UserMenu
