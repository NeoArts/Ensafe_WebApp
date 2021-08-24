import React from 'react'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import logoSVG from '../images/logo ensafe SVG.svg'
import { createBrowserHistory } from 'history'

function Footer() {

    const history = createBrowserHistory({ forceRefresh: true })

    const redirectPage = (number) => {
        switch (number) {
            case (0):
                history.push('/')
                break;
            case (1):
                history.push('/products')
                break;
            case (2):
                history.push('/pqrs')
                break;
            case (3):
                history.push('/privacy-policy')
                break;
            case (4):
                history.push('/contact-us')
                break;
        }
    }

    return (
        <div>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__content">
                        <div className="footer__identity">
                            <img src={logoSVG} alt="" className="footer__image" />
                            <p className="footer__motto">Trabajamos para generar confianza y productividad en sus espacios de trabajo</p>
                        </div>
                        <div className="footer__menu">
                            <Menu modificator="menu-vertical" />
                        </div>
                        <div className="footer__contact-container">
                            <div className="footer__social-media">
                                <a href="https://www.facebook.com/Ensafe-SAS-113297934348513" target="_blank" className="footer__social facebook">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                                    <h6>Siguenos en Facebook</h6>
                                </a>
                                <a href="https://www.instagram.com/ensafe_sas/" target="_blank" className="footer__social instagram">
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                                    <h6>Siguenos en Instagram</h6>
                                </a>
                            </div>
                            <button className="main-button full-width">
                                <a href="#" className="main-button__link" onClick={() => redirectPage(4)}>Contáctanos</a>
                                <FontAwesomeIcon icon={faPhone} size='1x' />
                            </button>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <span>&copy;</span>2021. Todos los derechos reservados * Diseñado por <strong>NeoArts</strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
