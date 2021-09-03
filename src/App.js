import React, { Suspense } from 'react'
import Homepage from './components/Homepage/Homepage'
import ProductsPage from './components/ProductsPage/ProductsPage'
import PqrsPage from './components/PqrsPage/PqrsPage'
import PrivacyPolicy from './components/PrivacyPolicyPage/PrivacyPolicyPage'
import ContactUs from './components/ContactUsPage/ContactUs'
import Navbar from './components/Navbar/NavBar'
import { Route, Switch } from 'react-router-dom'
import SocialMediaFloatingBanner from './components/SocialMediaFloatingBanner'

function App() {

  const LazyFooter = React.lazy(() => import('./components/Footer/Footer'));
  const LazyNavbar = React.lazy(() => import('./components/Navbar/NavBar'));

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
      </Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default App;
