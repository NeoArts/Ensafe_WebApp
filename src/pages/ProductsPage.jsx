import React, { useEffect } from 'react'
import ProductItem from '../components/ProductsPage/ProductItem';
import database from '../constants/poducts.json'
import { Link } from 'react-router-dom'
import { productsCategoriesOptions } from '../constants/page_data'

function Productspage() {
    var category = window.location.href.split("/").pop();
    var products = database.productsDatabase;
    var menuLinkElements = document.getElementsByClassName('category-menu__link');
    
    useEffect(() => {
        if(menuLinkElements.length > 0){
            var categories = Array.from(productsCategoriesOptions).map((item) => {
                return (item.category);
            });
    
            Array.from(menuLinkElements).forEach((menuElement) => {
                menuElement.classList.remove('active');
            });
          
            menuLinkElements[categories.indexOf(category)].classList.add('active')
        }
        
        window.scrollTo(0, 0);
    });

    return (
        <>
        <section className='products' id='productsSection'>
                <div className={"products__container max-p-width"}>
                    <div id='categoryHeader' className={"category-header"}>
                        <div className="category-header__container">
                            <div className="category-menu">
                                <h2 className='category-menu__title'>Categorías</h2>
                                <nav className="category-menu__container">
                                    <ul className='category-menu__ul'>
                                        {Array.from(productsCategoriesOptions).map((item) => {
                                            return(
                                                <Link to={item.link} params={{ category: item.category }} className={"menu__item no-border category-menu__item"} >
                                                    <div className="category-menu__link">{item.name}</div>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='products-grid-container'>
                        <div className="products-grid" id='productGrid'>
                            <div className="products-grid__container" id="productsGridContainer">
                                {Array.from(products).map((product) => {
                                    if(product.productCategoryId.includes(category)){
                                        return (
                                            <ProductItem product={product}/>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            
        </>
    )
}

export default Productspage
