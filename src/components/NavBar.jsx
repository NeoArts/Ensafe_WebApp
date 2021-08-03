import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import hands from '../images/hands.png'

function NavBar() {
    return (
        <div>
            <header className="header">
                <section className="header__container">
                    <div className="header__controls-container">
                        <div className="header__menu-container">
                            <a href="#" className="menu-icon center-item">
                                <div className="menu-icon__top"></div>
                                <div className="menu-icon__middle"></div>
                                <div className="menu-icon__bottom"></div>
                            </a>
                        </div>
                        <div className="header__logo-container">
                            <h1 className="logo">ENSAFE</h1>
                        </div>
                    </div>
                    <div className="header__shop-menu-container">
                        <nav className="shop-menu">
                            <ul className="shop-menu__items">
                                <li className="shop-menu__item">
                                    <FontAwesomeIcon icon={faSearch} className="shop-menu__item-icon" />
                                </li>
                                <li className="shop-menu__item">
                                    <FontAwesomeIcon icon={faHeart} className="shop-menu__item-icon" />
                                </li>
                                <li className="shop-menu__item">
                                    <FontAwesomeIcon icon={faShoppingCart} className="shop-menu__item-icon" />
                                </li>
                                <li className="shop-menu__item">
                                    <a href="#" className="shop-menu__login">Iniciar</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
            <section className="sidebar-social">
                <div className="sidebar-social__container">
                    <ul className="sidebar-social__items">
                        <li className="sidebar-social__item">
                            <FontAwesomeIcon icon={faFacebook} size='2x' className="sidebar-social__item-icon" />
                        </li>
                        <li className="sidebar-social__item">
                            <FontAwesomeIcon icon={faInstagram} size='2x' className="sidebar-social__item-icon" />
                        </li>
                        <li className="sidebar-social__item">
                            <FontAwesomeIcon icon={faLinkedin} size='2x' className="sidebar-social__item-icon" />
                        </li>
                        <li className="sidebar-social__item">
                            <FontAwesomeIcon icon={faYoutube} size='2x' className="sidebar-social__item-icon" />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="main-section">
                <div className="main-section__container">
                    <div className="main-section__feature-product">
                        <div className="generic-info half-width-item">
                            <h1 className="generic-info__title">Protección para manos</h1>
                            <p className="generic-info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi maiores perspiciatis expedita excepturi aspernatur placeat cumque minima corporis consequatur.</p>
                            <a href="#" className="outline-button">Ver colección</a>
                        </div>
                    </div>
                    {/* <div className="presentation-card absolute-item">
                        <div className="presentation-card__logo-container">
                            <h2 className="presentation-card__logo">ENSAFE</h2>
                        </div>
                        <div className="presentation-card__title-container">
                            <h2 className="presentation-card__title">CABEZA</h2>
                        </div>
                    </div> */}
                    {/* <img src="#" alt="main-image-1" className="main-section__image" /> */}
                </div>
            </section>
        </div>
    )
}

export default NavBar
