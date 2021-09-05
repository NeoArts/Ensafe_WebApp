import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import feet from '../../images/feets.webp'
import head from '../../images/head.webp'
import hands from '../../images/hands.webp'
import Divider from '../Divider'

function FeaturedProduct() {

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

    return (
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
    )
}

export default FeaturedProduct
