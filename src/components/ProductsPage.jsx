import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

function Productspage() {
    return (
        <div>
            <NavBar />
            <section className="products">
                <div className="products__container">
                    <h3 className="comming-soon">Proximamente</h3>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Productspage
