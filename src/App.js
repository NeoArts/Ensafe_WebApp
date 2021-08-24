import Homepage from './components/Homepage'
import ProductsPage from './components/ProductsPage'
import PqrsPage from './components/PqrsPage'
import PrivacyPolicy from './components/PrivacyPolicyPage'
import ContactUs from './components/ContactUs'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SocialMediaFloatingBanner from './components/SocialMediaFloatingBanner'

function App() {
  return (
    <div>
      <Navbar />
      <SocialMediaFloatingBanner />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/pqrs" component={PqrsPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
