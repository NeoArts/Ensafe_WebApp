import React, { Suspense, useEffect } from 'react'
import Homepage from './pages/Homepage/Homepage'
import ProductsPage from './pages/ProductsPage'
import PqrsPage from './pages/PqrsPage'
import PrivacyPolicy from './pages/PrivacyPolicyPage'
import ContactUs from './pages/ContactUs'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import SocialMediaFloatingBanner from './components/Shared/SocialMediaFloatingBanner/SocialMediaFloatingBanner'
import ProductDetailsPage from './components/ProductsPage/ProductDetailsPage';
import Productspage from './pages/ProductsPage'
import ReactGA from 'react-ga';
import NavBar from './pages/Shared/NavBar'


function App() {

  const LazyFooter = React.lazy(() => import('./pages/Shared/Footer'));
  
  const TRACKING_ID = "G-LQPZPMMZMB"; // Replace with your GA4 Measurement ID
  ReactGA.initialize(TRACKING_ID);

  let location = useLocation();
  
  useEffect(() => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <div>
      {/* <div id='promotionBanner' className='Promotion-banner show'>
        <span onClick={() => setCategory(monthSection)}>Mira nuestros <strong><Link to={'/products/' + monthSection}>Productos del mes!</Link></strong>. Quedan {daysUntilEndOfMonth} días</span>
        <div className='absolute-item close-promotion-banner' style={{top: "0px", right: "0px", padding: "8px"}} onClick={closePromotionBanner}>x</div>
      </div> */}
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
