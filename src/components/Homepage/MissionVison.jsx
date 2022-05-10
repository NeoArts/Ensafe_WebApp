import React from 'react'
import vision from '../../assets/images/vision-dark.svg'
import mission from '../../assets/images/mission-dark.svg'
import value from '../../assets/images/values-dark.svg'

function MissionVison() {
    return (
        <div className="mission-vision__container">
            <div className="mission-vision__grid-container max-p-width">
                <div className="mission-vision__info">
                    <img src={mission} alt="" className="mission-vision__info-image" />
                    <p className="mission-vision__info-description">Suministramos dotación industrial y productos de protección personal, encaminados a garantizar la salud y seguridad de las personas y la protección del entorno en toda clase de empresas y organizaciones. Enmarcados en nuestros valores y buscando el beneficio de nuestros socios y colaboradores</p>
                </div>
                <div className="mission-vision__info">
                    <img src={vision} alt="" className="mission-vision__info-image" />
                    <p className="mission-vision__info-description">Ser reconocidos a nivel nacional en el año 2025 como una empresa confiable en el suministro de productos de dotación industrial y protección personal para la industria en general, que contribuyan a proteger el entorno empresarial (personas, activos y medio ambiente), apoyados en nuestros trabajadores y aliados comerciales para brindar toda la satisfacción y confianza a nuestros clientes</p>
                </div>
                <div className="mission-vision__info">
                    <img src={value} alt="" className="mission-vision__info-image" />
                    <p className="mission-vision__info-description">Buscamos mejorar de manera continua en todas las actividades encaminadas a satisfacer las necesidades de nuestros clientes, ofreciendo y entregando oportunamente dotación industrial y productos de protección personal que cumplan con los parámetros de seguridad requeridos</p>
                </div>
            </div>
        </div>
    )
}

export default MissionVison
