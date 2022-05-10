import { faPhone, faQuestion, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '../Shared/Divider'

function WhoWeAreSection() {
    return (
        <div className="who-we-are__container">
            <div className="who-we-are__info-container">
                <div className="who-we-are__info">
                    <h3 className="who-we-are__title">Nuestro equipo</h3>
                    <p className="who-we-are__description">Suministramos dotación industrial y productos de protección personal, encaminados a garantizar la salud y seguridad de las personas y la protección del entorno en toda clase de empresas y organizaciones. Enmarcados en nuestros valores y buscando el beneficio de nuestros socios y colaboradores</p>
                    <Link to="contact-us" className="white-button" >
                        <p className="white-button__link">Contáctanos</p>
                        <FontAwesomeIcon icon={faPhone} size='1x' />
                    </Link>
                </div>
                <div className="who-we-are__presentation-grid">
                    <Link to="/privacy-policy" className="white-button" >
                        <p className="white-button__link">Política de privacidad</p>
                        <FontAwesomeIcon icon={faQuestion} size='1x' />
                    </Link>
                    <Link to="/pqrs" className="white-button" >
                        <p className="white-button__link">Sección PQRS</p>
                        <FontAwesomeIcon icon={faInfo} size='1x' />
                    </Link>
                </div>
                <Divider title="Misión y visión" className="relative-item" color="#FFFFFF" id="mission-vision-divider" />
            </div>
        </div>
    )
}

export default WhoWeAreSection
