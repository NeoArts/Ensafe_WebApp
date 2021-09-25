import React, { useEffect, Suspense } from 'react'
import Divider from '../Divider'
import 'leaflet/dist/leaflet.css'
import BackDrop from '../LoginModal/BackDrop';

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const LazyFeaturedProduct = React.lazy(() => import('./FeaturedProduct'));
    const LazyOurProducts = React.lazy(() => import('./OurProducts'));
    const LazyWhoWeAre = React.lazy(() => import('./WhoWeAreSection'));
    const LazyMissionVision = React.lazy(() => import('./MissionVison'));
    const LazyCompany = React.lazy(() => import('./Company'));

    return (
        <div>
            <section className="featured-product" id="featured-product">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyFeaturedProduct />
                </Suspense>
            </section>
            <section className="our-products" id="our-products">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyOurProducts />
                </Suspense>
                <Divider title="¿Quienes somos?" className="relative-item" color="#2A2E92" background="#fff" id="who-we-are-divider" />
            </section>
            <section className="who-we-are" id="who-we-are">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyWhoWeAre />
                </Suspense>
            </section>
            <section className="mission-vision" id='mission-vision'>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyMissionVision />
                </Suspense>
                <Divider title="Empresa" className="relative-item" color="#2A2E92" id="company-divider" />
            </section>
            <section className="company" id='company'>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyCompany />
                </Suspense>
                <Divider title="Subir" className="relative-item margin-right" up={true} color="#2A2E92" id="up-divider" />
            </section>
        </div>
    )
}

export default Homepage
