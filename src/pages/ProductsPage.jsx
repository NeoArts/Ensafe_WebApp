import React, { useEffect } from 'react'
import ProductItem from '../components/ProductsPage/ProductItem';
import GradientTitle from '../components/Shared/GradientTitle';
import database from '../database/ProductsLocalDatabase.json'
import { BiMenuAltRight } from 'react-icons/bi'
import {
    Link
} from 'react-router-dom'

function Productspage() {
    var category = window.location.href.split("/").pop();
    var products = database.productsDatabase;
    const productElements = [];
    const productInDiscount = [];

    for(var i = 0; i < products.length; i++){
        if(products[i].productCategoryId.includes(category)){
            if(products[i].productDiscount > 0  && products[i].productCategoryId === database.monthSection){
                productInDiscount.push(<ProductItem key={products[i].productId} id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                    description={products[i].productDescription} colors={products[i].procuctColors} tallas={products[i].productSize} image={Object.values(products[i].procuctColors)[0]}
                    discount={products[i].productDiscount} amount={products[i].productAmount}/>);
            }
            productElements.push(<ProductItem key={products[i].productId} id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                                            description={products[i].productDescription} colors={products[i].procuctColors} tallas={products[i].productSize} image={Object.values(products[i].procuctColors)[0]}
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

    var menuLinkElements = document.getElementsByClassName('category-menu__link');
    
    if(menuLinkElements.length > 0){
        for(var j = 0; j < menuLinkElements.length; j++){
            menuLinkElements[j].classList.remove('active');
        }
        console.log(menuLinkElements);
        switch(category){
            // case "PDM":
            //     menuLinkElements[0].classList.add('active')
            //     break;
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
                    <div id='categoryHeader' className={"category-header hide"}>
                        <div className="category-header__container">
                            <div className="category-menu">
                                <h2 className='category-menu__title'>Categorías</h2>
                                {/* <BiMenuAltRight style={{position: "absolute", top: 70}}/> */}
                                <nav className="category-menu__container">
                                    <ul className='category-menu__ul'>
                                        {/* <Link to="/products/PDM" params={{ category: "PDM" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Productos del mes</div>
                                        </Link> */}
                                        <Link to="/products/PRV" params={{ category: "PRV" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección visual</div>
                                        </Link>
                                        <Link to="/products/PRC" params={{ category: "PRC" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección cabeza</div>
                                        </Link>
                                        <Link to="/products/PRF" params={{ category: "PRF" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección facial</div>
                                        </Link>
                                        <Link to="/products/PRA" params={{ category: "PRA" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección auditiva</div>
                                        </Link>
                                        <Link to="/products/PRM" params={{ category: "PRM" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección manual</div>
                                        </Link>
                                        <Link to="/products/PCR" params={{ category: "PCR" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección corporal</div>
                                        </Link>
                                        <Link to="/products/PAC" params={{ category: "PAC" }} className={"menu__item no-border category-menu__item"} >
                                            <div className="category-menu__link">Protección anti-caída</div>
                                        </Link>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='products-grid-container'>
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
