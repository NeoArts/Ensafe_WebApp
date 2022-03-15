import React, { useEffect } from 'react'
import ProductItem from './ProductItem';

function ProductsGridComponent(props) {

    var products = props.products;
    const productElements = [];

    for(var i = 0; i < products.length; i++){
        console.log(products[i]);
        productElements.push(<ProductItem price={products[i].productPrice} name={products[i].productName} 
                                        description={products[i].productDescription} colors={products[i].procuctColors}/>);
    }

    return (
        <>
            <div className="products-grid">
                <div className="products-grid__container" id="productsGridContainer">
                    {productElements}
                </div>
            </div>
        </>
    )
}

export default ProductsGridComponent