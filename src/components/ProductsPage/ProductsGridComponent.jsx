import React, { Component }  from 'react'
import ProductItem from './ProductItem';
import database from '../../database/ProductsLocalDatabase.json'

class ProductsGridComponent extends Component {

    render(){
        var category = window.location.href.split("/").pop();
        var products = database.productsDatabase;
        const productElements = [];
    
        for(var i = 0; i < products.length; i++){
            if(products[i].productCategoryId === category){
                productElements.push(<ProductItem id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                                                description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                                                discount={products[i].productDiscount} amount={products[i].productAmount}/>);
            }
        }
    
        return (
            <>
                <div className="products-grid" id='productGrid'>
                    <div className="products-grid__container" id="productsGridContainer">
                        {productElements}
                    </div>
                </div>
            </>
        )
    }
}

export default ProductsGridComponent