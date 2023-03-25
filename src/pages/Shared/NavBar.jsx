import React, { useEffect } from 'react'
import logoSVG from '../../assets/images/logoSVG.svg'
import logoCircleSVG from '../../assets/images/LogoCircleEnsafe.png'
import Menu from '../../components/Shared/Menu/Menu'
import database from '../../constants/poducts.json'
import ProductItem from '../../components/ProductsPage/ProductItem';
import { Link } from 'react-router-dom'
import MenuIcon from '../../components/MenuIcon/MenuIcon'

function NavBar() {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [mobileScreen, setMobileScreen] = React.useState(false);
    var products = database.productsDatabase;
    var category = window.location.href.split("/").pop();
    
    var productsSection = document.getElementById('productsSection');
    var menu = document.getElementById('menu');

    const productElements = [];
    const productInDiscount = [];
    
    if(productsSection !== null && menu !== null){
        menu.style.top = "4.4725em";
    }

    for(var i = 0; i < products.length; i++){
        if(products[i].productCategoryId === category){
            if(products[i].productDiscount > 0){
                productInDiscount.push(
                  <ProductItem 
                    id={products[i].productId} 
                    price={products[i].productPrice} 
                    name={products[i].productName} 
                    category={products[i].productCategoryId}
                    description={products[i].productDescription} 
                    colors={products[i].productColors} 
                    image={Object.values(products[i].productColors)[0]}
                    discount={products[i].productDiscount} 
                    amount={products[i].productAmount}
                  />);
            }
            productElements.push(
              <ProductItem 
                id={products[i].productId} 
                price={products[i].productPrice} 
                name={products[i].productName} 
                category={products[i].productCategoryId}
                description={products[i].productDescription} colors={products[i].productColors} image={Object.values(products[i].productColors)[0]}
                discount={products[i].productDiscount} amount={products[i].productAmount}
              />);                            
        }
    }

    function setSelectedCategory(selectedCategory){
        var categories = ["PDM","PRV","PRC","PRF","PRA","PRM","PCR","PAC"];
        var menuLinkElements = document.getElementsByClassName('category-menu__link');

        Array.from(menuLinkElements).forEach((menuElement) => {
          menuElement.classList.remove('active');
        });
        
        menuLinkElements[categories.indexOf(selectedCategory)].classList.add('active')
    }

    useEffect(() => {
        var productsSection =  document.getElementById('productsSection');
        var categoryHeader = document.getElementById('categoryHeader');
        
        if(productsSection !== null){
            if(categoryHeader !== null){
                categoryHeader.classList.remove('hide');
            }
        }

        if(category === "PDM" || category === "PRV" || category === "PRC" || category === "PRF" || category === "PRA" || category === "PRM" || category === "PCR" || category === "PAC"){
            console.log("set category: " + category);
            setSelectedCategory(category);
        }
    },[]);

    const setMenuState = () => {
        setMenuOpen(window.innerWidth >= 1141);
        setMobileScreen(window.innerWidth < 1141);
    }

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
                    {(mobileScreen) && <MenuIcon open={menuOpen} onclick={setMenuOpen}/> }
                    {((mobileScreen && menuOpen) || !mobileScreen) && <Menu className={(!mobileScreen) ? "menu-horizontal" : ""} open={menuOpen} mobileScreen={mobileScreen}/>}
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
