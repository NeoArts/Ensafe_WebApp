import React from 'react'
import { Link } from 'react-router-dom'

function UserMenu() {
    return (
        <nav className="user-menu">
            <ul className="user-menu__nav">
                <li className="user-menu__item">
                    <Link to="/" className="user-menu__link">Favoritos</Link>
                </li>
                <li className="user-menu__item">
                    <Link to="/" className="user-menu__link">Historial de compras</Link>
                </li>
                <li className="user-menu__item">
                    <Link to="/" className="user-menu__link">Carrito</Link>
                </li>
                <li className="user-menu__item">
                    <button className="user-menu__link">Cerrar sesion</button>
                </li>
            </ul>
        </nav>
    )
}

export default UserMenu
