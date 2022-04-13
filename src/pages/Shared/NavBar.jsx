import React, { useEffect } from 'react'
import { useState } from 'react'
import logoSVG from '../../assets/images/logoSVG.svg'
import logoCircleSVG from '../../assets/images/LogoCircleEnsafe.png'
import Menu from '../../components/Shared/Menu'
import ShoppingMenu from '../../components/Shared/ShoppingMenu'
import database from '../../database/ProductsLocalDatabase.json'
import ProductItem from '../../components/ProductsPage/ProductItem';
import { motion } from 'framer-motion'
import {
    Link
} from 'react-router-dom'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const changeMenuState = () => {

        var menu = document.getElementById('menu');
        var menuTop = document.getElementsByClassName('top')[0];
        var menuMiddle = document.getElementsByClassName('middle')[0];
        var menuBottom = document.getElementsByClassName('bottom')[0];
        

        if (menuOpen) {
            setMenuOpen(false);
            menu.classList.remove('open');
            menu.style.right = '-9999px';
            menu.style.visibility = 'hidden';
            menuTop.classList.remove('rotate-right');
            menuMiddle.classList.remove('disappear');
            menuBottom.classList.remove('rotate-left');
        }
        else {
            setMenuOpen(true);
            menu.classList.add('open');
            menu.style.visibility = 'visible';
            menu.style.right = '0px';
            menuTop.classList.add('rotate-right');
            menuMiddle.classList.add('disappear');
            menuBottom.classList.add('rotate-left');
        }
        
    }

    const setMenuState = () => {

        setMenuOpen(false);

        var menuIcon = document.getElementById('menu-icon');
        var menu = document.getElementById('menu');
        var menuItems = document.getElementsByClassName('menu__item');
        menu.classList.remove('open');

        if (window.innerWidth < 1141) {
            menuIcon.style.visibility = 'visible';
            menu.style.visibility = 'hidden';
            menu.classList.remove('menu-horizontal');
            menu.classList.add('absolute-item');
            menu.style.right = '-9999px';
            menu.style.top = '4.4725em';
            menu.style.width = '100%';
            menu.style.background = '#F6F7FB'
            menu.style.padding = '1em 0em'

            for (var i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.add('menu-vertical');
                menuItems[i].style.marginRight = '1.875em';
            }
        }
        else {
            menuIcon.style.visibility = 'hidden';
            menu.style.visibility = 'visible';
            menu.classList.add('menu-horizontal');
            menu.classList.remove('absolute-item');
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].style.marginRight = '0em';
                menuItems[j].classList.remove('menu-vertical');
            }
        }
    }

    var products = database.productsDatabase;
    var category = window.location.href.split("/").pop();

    var productsSection = document.getElementById('productsSection');
    var menu = document.getElementById('menu');

    const productElements = [];
    const productInDiscount = [];
    
    if(productsSection !== null && menu !== null){
        menu.style.top = "calc(4.4725em + 50px)";
    }

    for(var i = 0; i < products.length; i++){
        if(products[i].productCategoryId === category){
            if(products[i].productDiscount > 0){
                productInDiscount.push(<ProductItem id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                    description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                    discount={products[i].productDiscount} amount={products[i].productAmount}/>);
            }
            productElements.push(<ProductItem id={products[i].productId} price={products[i].productPrice} name={products[i].productName} category={products[i].productCategoryId}
                                            description={products[i].productDescription} colors={products[i].procuctColors} image={Object.values(products[i].procuctColors)[0]}
                                            discount={products[i].productDiscount} amount={products[i].productAmount}/>);
        }
    }

    function setCategory(selectedCategory){

        var menuLinkElements = document.getElementsByClassName('category-menu__link-border');
        
        for(var i = 0; i < menuLinkElements.length; i++){
            menuLinkElements[i].classList.remove('active');
        }

        switch(selectedCategory){
            case "PRV":
                menuLinkElements[0].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRV";
                break;
            case "PRC":
                menuLinkElements[1].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRC";
                break;
            case "PRF":
                menuLinkElements[2].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRF";
                break;
            case "PRA":
                menuLinkElements[3].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRA";
                break;
            case "PRM":
                menuLinkElements[4].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRM";
                break;
            case "PCR":
                menuLinkElements[5].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PCR";
                break;
            case "PAC":
                menuLinkElements[6].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PAC";
                break;
            default:
                menuLinkElements[0].classList.add('active')
                window.location.href = "http://" + window.location.host + "/#/products/PRV";
        }
    }

    useEffect(() => {
        var productsSection =  document.getElementById('productsSection');
        var categoryHeader = document.getElementById('categoryHeader');
        var currentCategory = window.location.href.split("/").pop();

        if(productsSection !== null){
            if(categoryHeader !== null){
                categoryHeader.classList.remove('hide');
            }
        }

        if(currentCategory === "PRV" || currentCategory === "PRC" || currentCategory === "PRF" || currentCategory === "PRA" || currentCategory === "PRM" || currentCategory === "PCR" || currentCategory === "PAC"){
            setCategory(currentCategory);
        }
    },[]);

    window.addEventListener('resize', setMenuState);
    window.addEventListener('load', setMenuState);

    return (
        <div>
            <div className={"nav"} id="nav">
                <div className="nav__container">
                    <Link to="/">
                        <img src={logoSVG} alt="Ensafe SAS logo" className="logo" />
                        <img src={logoCircleSVG} alt="Ensafe SAS logo" className="logo-circle" />
                    </Link>
                    <div className="nav__menu">
                        <Menu className="menu-horizontal" />
                        <ShoppingMenu />
                    </div>
                    <div className="menu-icon" id="menu-icon" onClick={() => changeMenuState()}>
                        <div className="menu-icon__bar top"></div>
                        <div className="menu-icon__bar middle"></div>
                        <div className="menu-icon__bar bottom"></div>
                    </div>
                </div>
                <div id='categoryHeader' className={"category-header hide"}>
                    <div className="category-header__container">
                        <div className="category-menu">
                            <nav className="category-menu__container">
                                <ul className='menu-horizontal category-menu__ul'>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRV")}>
                                        <div className="category-menu__link">Protección visual</div>
                                        <div className="category-menu__link-border active"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRC")}>
                                        <div className="category-menu__link">Protección cabeza</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRF")}>
                                        <div className="category-menu__link">Protección facial</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRA")}>
                                        <div className="category-menu__link">Protección auditiva</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PRM")}>
                                        <div className="category-menu__link">Protección manual</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PCR")}>
                                        <div className="category-menu__link">Protección corporal</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setCategory("PAC")}>
                                        <div className="category-menu__link">Protección anti-caída</div>
                                        <div className="category-menu__link-border"></div>
                                    </motion.button>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
