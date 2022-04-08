import React, { Component, useEffect } from 'react'
import BuyProductButton from './BuyProductButton';
import database from '../../database/ProductsLocalDatabase.json'

class ProductDetailsPage extends Component {
    render(){

        var productId = window.location.href.split("/").pop();
        var product = database.productsDatabase.find(p => p.productId === productId);

        var productColors = product.procuctColors;
        var firstImageUrl = "";
        const colors = [];

        for (const [color, imageUrl] of Object.entries(productColors)) {
            colors.push(<button id={"btn-" + color} style={{marginRight: "10px"}} className='outline-button-blue' onClick={() => changeColorImage(imageUrl, "btn-" + color)}>{color}</button>);
        }

        if(Object.values(productColors).length > 0){
            firstImageUrl = Object.values(productColors)[0];
        }

        function changeColorImage(imageUrl, id){
            
            var btnColor = document.getElementById(id);
            var colorButtons = document.getElementsByClassName('outline-button-blue');
            var productImage = document.getElementById('singleProductImage');
            for(var i = 0; i < colorButtons.length; i++){
                colorButtons[i].classList.remove("active");
            }

            productImage.src = imageUrl;
            btnColor.classList.add("active")
        }

        function SelectFirstColorButton(){
            useEffect(() => {
                document.getElementsByClassName('outline-button-blue')[0].classList.add("active");
                window.scrollTo(0, 0);
            },[]);

            return (<div></div>);
        }

        return (
            <div className="single-product-details">
                <div className="single-product-details__container">
                    <div className="single-product">
                        <div className="single-product-photo__container">
                            <img src={firstImageUrl} alt="" id='singleProductImage'/>
                        </div>
                        <div className="single-product-info__container">
                            {(product.productDiscount > 0) && <div className="single-product__off">Producto en oferta!</div>}
                            <div className="single-product-info__info">
                                <h1>{product.productName}</h1>
                                <p>{product.productDescription}</p>
                                <br />
                                <h4>Colores:</h4>
                                {colors}
                                <SelectFirstColorButton/>
                            </div>
                            <br />
                            <div className="product-info__buy-section">
                                <div className="product-info__prices">
                                    <p className="product-info__price">${(product.productDiscount > 0) ? (product.productPrice - (product.productPrice * product.productDiscount)) : product.productPrice}</p>
                                    {(product.productDiscount > 0) && <p className="product-info__last-price">${product.productPrice}</p>}
                                </div>
                                {(product.productAmount > 0) && <BuyProductButton name={product.productName} id={product.productId} category={product.productCategoryId}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetailsPage