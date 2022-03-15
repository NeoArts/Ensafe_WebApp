import React from 'react'

function ProductItem(props) {

    const colors = [];

    for(var i = 0; i < props.colors.length; i++){
        colors.push(<li>{props.colors[i]}</li>);
    }

    return (
        <div className="product-grid__item">
            <div className="product-image__container">
                <img src="" alt="" />
            </div>
            <div className="product-info__container">
                <div className="product-info__price-container">
                    <p className="product-info__price">${props.price}</p>
                </div>
                <h2 className="product-info__title">{props.name}</h2>
                <p className="product-info__description">{props.description}</p>
                <br />
                <strong>Colores:</strong>
                <ul>
                    {colors}
                </ul>
                <div className="product-info__buy-button">
                    <button className='main-button'>Comprar</button>
                </div> 
            </div>
        </div>
    )
}

export default ProductItem