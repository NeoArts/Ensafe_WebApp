import React, { useState, useEffect, Component } from 'react'
import { motion } from 'framer-motion'
import database from '../database/ProductsLocalDatabase.json'
import ProductsGridComponent from '../components/ProductsPage/ProductsGridComponent';
import ProductItem from '../components/ProductsPage/ProductItem';

class Productspage extends Component {

    render(){

        var category = window.location.href.split("/").pop();
        var products = database.productsDatabase;
        var menu = document.getElementById('menu');
        const productElements = [];
        console.log(category);
        if(menu !== null){
            menu.style.top = "calc(5.1688em + 50px)";
        }
        
        window.scrollTo(0, 0);

        for(var i = 0; i < products.length; i++){
            if(products[i].productCategoryId === category){
                productElements.push(<ProductItem id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                                                description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                                                discount={products[i].productDiscount} amount={products[i].productAmount}/>);
            }
        }

        function setCategory(category){
            switch(category){
                case "PRV":
                    window.location.href = "http://" + window.location.host + "/#/products/PRV";
                    break;
                case "PRC":
                    window.location.href = "http://" + window.location.host + "/#/products/PRC";
                    break;
                case "PRF":
                    window.location.href = "http://" + window.location.host + "/#/products/PRF";
                    break;
                case "PRA":
                    window.location.href = "http://" + window.location.host + "/#/products/PRA";
                    break;
                case "PRM":
                    window.location.href = "http://" + window.location.host + "/#/products/PRM";
                    break;
                case "PCR":
                    window.location.href = "http://" + window.location.host + "/#/products/PCR";
                    break;
                case "PAC":
                    window.location.href = "http://" + window.location.host + "/#/products/PAC";
                    break;
                default:
                    window.location.href = "http://" + window.location.host + "/#/products/PRV";
            }
        }

        //setCategory(category);
    
        return (
            <>
            <section className='products'>
                    <div className="products__container">
                        <div className="category-header">
                            <div className="category-header__container">
                                <div className="category-menu">
                                    <nav className="category-menu__container">
                                        <ul className='menu-horizontal category-menu__ul'>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRV")}>
                                                <div className="category-menu__link" replace>Protección visual</div>
                                                <div className={category === "PRV" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRC")}>
                                                <div className="category-menu__link" replace>Protección cabeza</div>
                                                <div className={category === "PRC" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRF")}>
                                                <div className="category-menu__link" replace>Protección facial</div>
                                                <div className={category === "PRF" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRA")}>
                                                <div className="category-menu__link" replace>Protección auditiva</div>
                                                <div className={category === "PRA" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRM")}>
                                                <div className="category-menu__link" replace>Protección manual</div>
                                                <div className={category === "PRM" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PCR")}>
                                                <div className="category-menu__link" replace>Protección corporal</div>
                                                <div className={category === "PCR" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PAC")}>
                                                <div className="category-menu__link" replace>Protección anti-caída</div>
                                                <div className={category === "PAC" ? "category-menu__link-border active" : "category-menu__link-border"}></div>
                                            </motion.button>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div>
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
}

export default Productspage
