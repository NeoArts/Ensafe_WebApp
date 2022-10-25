import React from 'react'
import Menu from '../../components/Shared/Menu/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import logoSVG from '../../assets/images/logo ensafe SVG.svg'
import { Link } from 'react-router-dom'

function Footer() {

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
                                <a href="https://www.facebook.com/Ensafe-SAS-113297934348513" target="_blank" rel="noreferrer" className="footer__social facebook">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                                    <p className="footer__social-media-text">Siguenos en Facebook</p>
                                </a>
                                <a href="https://www.instagram.com/ensafe_sas/" target="_blank" rel="noreferrer" className="footer__social instagram">
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                                    <p className="footer__social-media-text">Siguenos en Instagram</p>
                                </a>
                            </div>
                            <button className="main-button full-width">
                                <Link to="/contact-us" href="#" className="main-button__link">Contáctanos</Link>
                                <FontAwesomeIcon icon={faPhone} size='1x' />
                            </button>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <span>&copy;</span>2021. Todos los derechos reservados * Diseñado por <a target={"_blank"} href="https://www.neoarts.com.co">NeoArts</a> 
                        <div style={{fontSize: "8px"}}>V 1.3.3</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
