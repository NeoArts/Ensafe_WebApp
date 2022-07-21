import React, { Suspense } from 'react'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import PqrsPage from './pages/PqrsPage'
import PrivacyPolicy from './pages/PrivacyPolicyPage'
import ContactUs from './pages/ContactUs'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import SocialMediaFloatingBanner from './components/Shared/SocialMediaFloatingBanner'
import ProductDetailsPage from './components/ProductsPage/ProductDetailsPage';
import Productspage from './pages/ProductsPage'
import ProductsLocalDatabase from './database/ProductsLocalDatabase.json'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import NavBar from './pages/Shared/NavBar'


function App() {

  const LazyFooter = React.lazy(() => import('./pages/Shared/Footer'));
  const monthSection = ProductsLocalDatabase.monthSection;

  let dateToday = new Date();
  let lastDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth()+1, 0).getDate();
  let daysUntilEndOfMonth = lastDayOfMonth - dateToday.getDate();

  var titlePromotion = "";

  switch(monthSection){
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

  function setCategory(selectedCategory){

    var menuLinkElements = document.getElementsByClassName('category-menu__link-border');
    console.log(menuLinkElements);
    for(var i = 0; i < menuLinkElements.length; i++){
        console.log(menuLinkElements[i]);
        menuLinkElements[i].classList.remove('active');
    }

    switch(selectedCategory){
      case "PRV":
        menuLinkElements[0].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRV";
        break;
      case "PRC":
        menuLinkElements[1].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRC";
        break;
      case "PRF":
        menuLinkElements[2].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRF";
        break;
      case "PRA":
        menuLinkElements[3].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRA";
        break;
      case "PRM":
        menuLinkElements[4].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRM";
        break;
      case "PCR":
        menuLinkElements[5].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PCR";
        break;
      case "PAC":
        menuLinkElements[6].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PAC";
        break;
      default:
        menuLinkElements[0].classList.add('active')
        window.location.href = window.location.protocol + "//" + window.location.host + "/products/PRV";
    }
  }

  function closePromotionBanner(){
    var promotionBanner = document.getElementById('promotionBanner');
    promotionBanner.classList.add('hide');
  } 

  return (
    <div>
      <div id='promotionBanner' className='Promotion-banner show'>
        <span onClick={() => setCategory(monthSection)}>Estamos en el mes de la protección {titlePromotion}, mira nuestros <strong><Link to={'/products/' + monthSection}>Productos en oferta!</Link></strong>. Quedan {daysUntilEndOfMonth} días</span>
        <div className='absolute-item close-promotion-banner' style={{top: "0px", right: "0px", padding: "8px"}} onClick={closePromotionBanner}>x</div>
      </div>
      <NavBar/>
      <SocialMediaFloatingBanner />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" /> 
          </Route>
          <Route name="home" exact path="/home" component={Homepage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/pqrs" component={PqrsPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route name="single-product" exact path="/products/:category" component={Productspage}/>
          <Route name="single-product" exact path="/products/:category/:id" component={ProductDetailsPage}/>
        </Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default App;
