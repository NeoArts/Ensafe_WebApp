import React, { useEffect } from 'react'

function Productspage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="products">
                <div className="products__container">
                    <h3 className="comming-soon">Proximamente</h3>
                </div>
            </section>
        </div>
    )
}

export default Productspage
