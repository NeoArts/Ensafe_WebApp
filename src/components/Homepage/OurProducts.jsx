import React from 'react'
import lifeJacket from '../../assets/images/life-jacket.svg'
import GradientTitle from '../Shared/GradientTitle'
import helmet from '../../assets/images/helmet.svg'
import gloves from '../../assets/images/gloves.svg'
import boots from '../../assets/images/boots.svg'
import clip from '../../assets/images/clip.svg'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

function OurProducts() {
    return (
        <div className="our-products__container max-p-width">
            <div className="our-products__info">
                <GradientTitle title="Protección en cualquier lugar" />
                <p className="our-products__description">Todos nuestros productos con la mejor calidad</p>
            </div>
            <div className="grid">
                <div className="grid__container">
                    <Link to="/products/PRC" className="grid__item transparent-background">
                        <img src={helmet} alt="" className="grid__image" />
                        <p className="grid__title">Protección de cabeza</p>
                    </Link>
                    <Link to="/products/PCR" className="grid__item transparent-background">
                        <img src={boots} alt="" className="grid__image" />
                        <p className="grid__title">Protección de pies</p>
                    </Link>
                    <Link to="/products/PAC" className="grid__item transparent-background">
                        <img src={clip} alt="" className="grid__image" />
                        <p className="grid__title">Protección anticaída</p>
                    </Link>
                    <Link to="/products/PCR" className="grid__item transparent-background">
                        <img src={lifeJacket} alt="" className="grid__image" />
                        <p className="grid__title">Protección de cuerpo</p>
                    </Link>
                    <Link to="/products/PRM" className="grid__item transparent-background">
                        <img src={gloves} alt="" className="grid__image" />
                        <p className="grid__title">Protección de manos</p>
                    </Link>
                </div>
            </div>
            <div className='our-products__see-more'>
                <Link to="/products/PRV" className='our-products__see-more__link' >Ver productos</Link>
                <AiOutlineArrowRight/>
            </div>
        </div>
    )
}

export default OurProducts
