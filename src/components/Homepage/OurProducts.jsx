import React from 'react'
import lifeJacket from '../../images/life-jacket.svg'
import GradientTitle from '../GradientTitle'
import helmet from '../../images/helmet.svg'
import gloves from '../../images/gloves.svg'
import boots from '../../images/boots.svg'
import clip from '../../images/clip.svg'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

function OurProducts() {
    return (
        <div className="our-products__container">
            <div className="our-products__info">
                <GradientTitle title="Protección en cualquier lugar" />
                <p className="our-products__description">Todos nuestros productos con la mejor calidad</p>
            </div>
            <div className="grid">
                <div className="grid__container">
                    <button className="grid__item transparent-background">
                        <img src={helmet} alt="" className="grid__image" />
                        <p className="grid__title">Protección de cabeza</p>
                    </button>
                    <button className="grid__item transparent-background">
                        <img src={boots} alt="" className="grid__image" />
                        <p className="grid__title">Protección de pies</p>
                    </button>
                    <button className="grid__item transparent-background">
                        <img src={clip} alt="" className="grid__image" />
                        <p className="grid__title">Protección anticaída</p>
                    </button>
                    <button className="grid__item transparent-background">
                        <img src={lifeJacket} alt="" className="grid__image" />
                        <p className="grid__title">Protección de cuerpo</p>
                    </button>
                    <button className="grid__item transparent-background">
                        <img src={gloves} alt="" className="grid__image" />
                        <p className="grid__title">Protección de manos</p>
                    </button>
                </div>
            </div>
            <div className='our-products__see-more'>
                <Link to="/products" className='our-products__see-more__link' >Ver productos</Link>
                <AiOutlineArrowRight/>
            </div>
        </div>
    )
}

export default OurProducts
