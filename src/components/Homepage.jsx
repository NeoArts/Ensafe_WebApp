import { faChevronRight, faChevronLeft, faPhone, faQuestion, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lifeJacket from '../images/life-jacket.svg'
import mission from '../images/mission-dark.svg'
import GradientTitle from './GradientTitle'
import helmet from '../images/helmet.svg'
import gloves from '../images/gloves.svg'
import vision from '../images/vision-dark.svg'
import boots from '../images/boots.svg'
import hands from '../images/hands.png'
import value from '../images/values-dark.svg'
import React, { useState } from 'react'
import feet from '../images/feets.png'
import head from '../images/head.png'
import clip from '../images/clip.svg'
import Divider from './Divider'
import MapView from './MapView'
import 'leaflet/dist/leaflet.css'
import { createBrowserHistory } from 'history'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'


function Homepage() {

    const slideImage = [head, hands, feet];

    const [position, setPosition] = useState(0);

    const nextSlideImage = () => {
        if (position + 1 === 3) {
            setPosition(0)
        }
        else {
            setPosition(position + 1);
        }
    }

    const prevSlideImage = () => {
        if (position - 1 === -1) {
            setPosition(2);
        }
        else {
            setPosition(position - 1);
        }
    }

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
            <section className="featured-product" id="featured-product">
                <div className="featured-product__container">
                    <img src={slideImage[position]} alt="Ensafe SAS products" className="featured-product__image" />
                    <div className="featured-product__info">
                        <div className="info">
                            <h2 className="info-category">Protección para manos</h2>
                            <p className="info-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit eum eaque cum neque sunt?</p>
                            <Link to="/products" className="outline-button" >Ver productos</Link>
                        </div>
                    </div>
                    <div className="featured-product__controls">
                        <FontAwesomeIcon icon={faChevronRight} className="featured-product__next" size='3x' onClick={nextSlideImage} />
                    </div>
                    <div className="featured-product__controls">
                        <FontAwesomeIcon icon={faChevronLeft} className="featured-product__prev" size='3x' onClick={prevSlideImage} />
                    </div>
                    <Divider className="absolute-item" title="Nuestros productos" color="#FFFFFF" id="our-products-divider" />
                </div>
            </section>
            <section className="our-products" id="our-products">
                <div className="our-products__container">
                    <div className="our-products__info">
                        <GradientTitle title="Protección en cualquier lugar" />
                        <p className="our-products__description">Todos nuestros productos con la mejor calidad</p>
                    </div>
                    <div className="grid">
                        <div className="grid__container">
                            <a className="grid__item">
                                <img src={helmet} alt="" className="grid__image" />
                                <p className="grid__title">Protección de cabeza</p>
                            </a>
                            <a className="grid__item">
                                <img src={boots} alt="" className="grid__image" />
                                <p className="grid__title">Protección de pies</p>
                            </a>
                            <a className="grid__item">
                                <img src={clip} alt="" className="grid__image" />
                                <p className="grid__title">Protección anticaída</p>
                            </a>
                            <a className="grid__item">
                                <img src={lifeJacket} alt="" className="grid__image" />
                                <p className="grid__title">Protección de cuerpo</p>
                            </a>
                            <a className="grid__item">
                                <img src={gloves} alt="" className="grid__image" />
                                <p className="grid__title">Protección de manos</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Divider title="¿Quienes somos?" className="relative-item" color="#2A2E92" background="#fff" id="who-we-are-divider" />
            </section>
            <section className="who-we-are" id="who-we-are">
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
            </section>
            <section className="mission-vision" id='mission-vision'>
                <div className="mission-vision__container">
                    <div className="mission-vision__grid-container">
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
                <Divider title="Empresa" className="relative-item" color="#2A2E92" id="company-divider" />
            </section>
            <section className="company" id='company'>
                <div className="company__container">
                    <div className="company__map">
                        <a href="https://www.google.com/maps/dir/4.7374575,-74.1122502/ensafe/@4.6809944,-74.1636275,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9955d6541857:0x44402855ae467a5e!2m2!1d-74.1182454!2d4.6257052" target="_blank" className="company__map-googlemaps">Ver en google maps</a>
                        <MapView />
                    </div>
                    <div className="company__info">
                        <h1 className="company__title">Nuestra ubicación</h1>
                        <p className="company__description">Hola!. Si quieres ir personalmente a nuestro domicilio, te ayudaremos con gusto! </p>
                        <div className="presentation-card">
                            <h4>Ensafe SAS</h4>
                            <h6>Dirección</h6>
                            <p>Carrera 62 No. 4G-57, Bogotá</p>
                            <hr />
                            <h6>Horario</h6>
                            <p>Atendemos de lunes a viernes: 8:00 AM - 5:00 PM</p>
                            <hr />
                            <h6>Telefono</h6>
                            <p>3004930</p>
                        </div>
                    </div>
                </div>
                <Divider title="Subir" className="relative-item margin-right" up={true} color="#2A2E92" id="up-divider" />
            </section>
        </div>
    )
}

export default Homepage
