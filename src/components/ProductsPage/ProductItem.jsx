import React from 'react'
import {
    Link
} from 'react-router-dom'
import BuyProductButton from './BuyProductButton';

function ProductItem({ product }) {
    console.log(product);
    return (
        <div className="product-grid__item">
            <div className="product-image__container">
                <Link to={"/products/"+product.productCategoryId[0]+"/"+product.productId} params={{ category: product.productCategoryId[0],id: product.productId }}>
                    <img src={Object.values(product.productColors)[0]} alt="" />
                </Link>
            </div>
            <div className="product-info__container">
                <div className="product-info__price-container">
                    <div className="product-info__prices">
                        {/* <p className="product-info__price">{(product.productDiscount > 0) ? (product.productPrice - (product.productPrice * product.productDiscount)) : product.productPrice}</p>
                        {(product.productDiscount > 0) && <p className="product-info__last-price">${product.productPrice}</p>} */}
                    </div>
                    {(product.productDiscount > 0) && <div className="product-info__price-discount">{product.productDiscount * 100}% Off</div>}
                    {(product.remate) && <div className="product-info__price-discount">Remate</div>}
                </div>
                <h2 className="product-info__title">
                    <Link to={"/products/"+product.productCategoryId[0]+"/"+product.productId} params={{ category: product.productCategoryId[0],id: product.productId }}>
                        {product.productName}
                    </Link>
                </h2>
                <p className="product-info__description">{product.productDescription.length >= 166 ? product.productDescription.substring(0, 163) + "..." : product.productDescription}</p>
                <br />
                <p style={{margin: 0}}>Colores</p>
                <ul>
                    {Array.from(Object.keys(product.productColors)).map((color) => {
                        return (
                            <li key={color}>{color}</li> 
                        )
                    })}
                </ul>
                {(product.productAmount > 0) && <BuyProductButton className={"product-info__buy-button"} name={product.productName} id={product.productId} category={product.productCategoryId[0]}/>}
            </div>
        </div>
    )
}

export default ProductItem