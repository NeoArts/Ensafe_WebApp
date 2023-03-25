import React, { useState } from 'react'
import banner_01 from '../../assets/images/banner_01.webp'
import banner_resp from '../../assets/images/Banner_resp.webp'
import {
    Link
} from 'react-router-dom'
import banner_promo from '../../assets/images/banner_prom.png'

function FeaturedProduct() {

    return (
        <div className="featured-product__container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button> 
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner featured-product__info">
                    <div className="carousel-item active">
                        <img src={banner_promo} alt="Ensafe SAS products" className="featured-product__image" />
                        <div className="featured-product__info">
                            <div className="info">
                                <h2 className="info-category">Producto en remate</h2>
                                <Link to="/products/CAS" params={{ category: "CAS" }} className="outline-button">Ver producto</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner_01} alt="Ensafe SAS products" className="featured-product__image" />
                        {/* <div className="featured-product__info">
                            <div className="info">
                                <h2 className="info-category">Productos del mes</h2>
                                <Link to="/products/PDM" params={{ category: "PDM" }} className="outline-button" >Ver productos</Link>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="carousel-item">
                        <img src={feet} alt="Ensafe SAS products" className="featured-product__image" />
                        <div className="featured-product__info">
                            <div className="info">
                                <h2 className="info-category">Protección para pies</h2>
                                <Link to="/products/PCR" params={{ category: "PCR" }} className="outline-button" >Ver productos</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <Divider className="absolute-item" title="Nuestros productos" color="#FFFFFF" id="our-products-divider" /> */}
        </div>
    )
}

export default FeaturedProduct
