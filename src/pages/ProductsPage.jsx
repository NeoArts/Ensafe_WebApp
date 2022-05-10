import React, { useEffect } from 'react'
import ProductItem from '../components/ProductsPage/ProductItem';
import GradientTitle from '../components/Shared/GradientTitle';
import database from '../database/ProductsLocalDatabase.json'

function Productspage() {
    var category = window.location.href.split("/").pop();
    var products = database.productsDatabase;
    const productElements = [];
    const productInDiscount = [];

    for(var i = 0; i < products.length; i++){
        if(products[i].productCategoryId === category){
            if(products[i].productDiscount > 0  && products[i].productCategoryId === database.monthSection){
                productInDiscount.push(<ProductItem key={products[i].productId} id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                    description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                    discount={products[i].productDiscount} amount={products[i].productAmount}/>);
            }
            productElements.push(<ProductItem key={products[i].productId} id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                                            description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                                            discount={products[i].productDiscount} amount={products[i].productAmount}/>);
        }
    }

    var titlePromotion = "";

    switch(database.monthSection){
        case "PRV":
            titlePromotion = "visual";
            break;
        case "PRC":
            titlePromotion = "de cabeza";
            break;
        case "PRF":
            titlePromotion = "facial";
            break;
        case "PRA":
            titlePromotion = "auditiva";
            break;
        case "PRM":
            titlePromotion = "manual";
            break;
        case "PCR":
            titlePromotion = "corporal";
            break;
        case "PAC":
            titlePromotion = "anti-caída";
            break;
        default:
            titlePromotion = "visual";
            break;
    }

    var menuLinkElements = document.getElementsByClassName('category-menu__link-border');
    
    if(menuLinkElements.length > 0){
        for(var j = 0; j < menuLinkElements.length; j++){
            menuLinkElements[j].classList.remove('active');
        }
    
        switch(category){
            case "PRV":
                menuLinkElements[0].classList.add('active')
                break;
            case "PRC":
                menuLinkElements[1].classList.add('active')
                break;
            case "PRF":
                menuLinkElements[2].classList.add('active')
                break;
            case "PRA":
                menuLinkElements[3].classList.add('active')
                break;
            case "PRM":
                menuLinkElements[4].classList.add('active')
                break;
            case "PCR":
                menuLinkElements[5].classList.add('active')
                break;
            case "PAC":
                menuLinkElements[6].classList.add('active')
                break;
            default:
                menuLinkElements[0].classList.add('active')
                break;
        }
    }
    
    window.scrollTo(0, 0);

    useEffect(() => {
        var categoryHeader = document.getElementById('categoryHeader');

        if(categoryHeader !== null){
            categoryHeader.classList.remove('hide');
        }
    });

    return (
        <>
        <section className='products' id='productsSection'>
                <div className={"products__container max-p-width"}>
                    <div>
                        {(productInDiscount.length > 0) &&
                        <div>
                            <div className={"products-grid promotion-grid"} id='productGrid'>
                                <div className={(productInDiscount.length > 0) ? "products-grid__container filled" : "products-grid__container"} id="productsGridContainer">
                                    <GradientTitle title={"Mes de la protección " + titlePromotion}/>
                                    {productInDiscount}
                                </div>
                            </div>
                        </div>}
                        <div className="products-grid" id='productGrid'>
                            <div className="products-grid__container" id="productsGridContainer">
                                {productElements}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            
        </>
    )
}

export default Productspage
