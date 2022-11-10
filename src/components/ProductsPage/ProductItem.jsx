import React from 'react'
import {
    Link
} from 'react-router-dom'
import BuyProductButton from './BuyProductButton';

function ProductItem(props) {

    const colors = [];
    const tallas = [];
    
    for (const color of Object.keys(props.colors)) {
        colors.push(<li key={color}>{color}</li>);
    }

    if(props.tallas !== undefined) {
        for (const talla of props.tallas) {
            tallas.push(<li key={talla}>{talla}</li>);
        }
    }
    
    return (
        <div className="product-grid__item">
            <div className="product-image__container">
                <Link to={"/products/"+props.category+"/"+props.id} params={{ category: props.category,id: props.id }}>
                    <img src={props.image} alt="" />
                </Link>
            </div>
            <div className="product-info__container">
                <div className="product-info__price-container">
                    <div className="product-info__prices">
                        <p className="product-info__price">${(props.discount > 0) ? (props.price - (props.price * props.discount)) : props.price}</p>
                        {(props.discount > 0) && <p className="product-info__last-price">${props.price}</p>}
                    </div>
                    {(props.discount > 0) && <div className="product-info__price-discount">{props.discount * 100}% Off</div>}
                </div>
                <h2 className="product-info__title">
                    <Link to={"/products/"+props.category+"/"+props.id} params={{ category: props.category,id: props.id }}>
                        {props.name}
                    </Link>
                </h2>
                <p className="product-info__description">{props.description.length >= 166 ? props.description.substring(0, 163) + "..." : props.description}</p>
                <br />
                <p style={{margin: 0}}>Colores</p>
                <ul>
                    {colors}
                </ul>
                {(props.tallas !== undefined) && <p style={{margin: 0}}>Talla</p>}
                <ul>
                    {tallas}
                </ul>
                {(props.amount > 0) && <BuyProductButton className={"product-info__buy-button"} name={props.name} id={props.id} category={props.category}/>}
            </div>
        </div>
    )
}

export default ProductItem