import React, { Suspense } from 'react'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import PqrsPage from './pages/PqrsPage'
import PrivacyPolicy from './pages/PrivacyPolicyPage'
import ContactUs from './pages/ContactUs'
import { Route, Switch } from 'react-router-dom'
import SocialMediaFloatingBanner from './components/Shared/SocialMediaFloatingBanner'
import ProductDetailsPage from './components/ProductsPage/ProductDetailsPage';
import Productspage from './pages/ProductsPage'


function App() {

  const LazyFooter = React.lazy(() => import('./pages/Shared/Footer'));
  const LazyNavbar = React.lazy(() => import('./pages/Shared/NavBar'));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
      </Suspense>
      <SocialMediaFloatingBanner />
      <Switch>
        <Route exact path="/" component={Homepage} />
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
