import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"

function SocialMediaFloatingBanner() {
    return (
        <div>
            <div className="social-media">
                <div className="social-media__container">
                    <a href="https://www.facebook.com/Ensafe-SAS-113297934348513" aria-label="Facebook" target="_blank" rel="noreferrer" className="social-media__link">
                        <FontAwesomeIcon icon={faFacebookSquare} size='2x' className="social-media__icon" />
                    </a>
                    <a href="https://www.instagram.com/ensafe_sas/" aria-label="Instagram" target="_blank" rel="noreferrer" className="social-media__link">
                        <FontAwesomeIcon icon={faInstagramSquare} size='2x' className="social-media__icon" />
                    </a>
                    <a href="https://wa.me/573157891891?text=Buenos%20días%20equipo%20Ensafe" aria-label="Whatsapp" target="_blank" rel="noreferrer" className="social-media__link">
                        <FontAwesomeIcon icon={faWhatsappSquare} size='2x' className="social-media__icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaFloatingBanner
