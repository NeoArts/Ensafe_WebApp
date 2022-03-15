import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import CategoryMenu from './CategoryMenu';
import VisualProtectionComponent from './VisualProtectionComponent'
import BodyProtectionComponent from './BodyProtectionComponent'
import FaceProtectionComponent from './FaceProtectionComponent';
import FallProtectionComponent from './FallProtectionComponent';
import HandProtectionComponent from './HandProtectionComponent';
import HeadProtectionComponent from './HeadProtectionComponent';
import HearingProtectionComponent from './HearingProtectionComponent';
import { Redirect } from 'react-router-dom';

function Productspage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='products'>
                <div className="products__container">
                    <div className="category-header">
                        <div className="category-header__container">
                            <CategoryMenu/>
                        </div>
                    </div>
                    <Switch className="products-list">  
                        <Route exact path="/products">
                            <Redirect to="/products/visual-protection" />
                        </Route>
                        <Route exact path="/products/visual-protection" component={VisualProtectionComponent} />
                        <Route exact path="/products/body-protection" component={BodyProtectionComponent} />
                        <Route exact path="/products/face-protection" component={FaceProtectionComponent} />
                        <Route exact path="/products/fall-protection" component={FallProtectionComponent} />
                        <Route exact path="/products/hand-protection" component={HandProtectionComponent} />
                        <Route exact path="/products/head-protection" component={HeadProtectionComponent} />
                        <Route exact path="/products/hearing-protection" component={HearingProtectionComponent} />
                    </Switch>
                </div>
            </section>
        </>
    )
}

export default Productspage
