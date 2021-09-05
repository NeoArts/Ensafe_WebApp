import React, { useEffect, Suspense } from 'react'
import Divider from '../Divider'
import 'leaflet/dist/leaflet.css'

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const LazyFeaturedProduct = React.lazy(() => import('./FeaturedProduct'));
    const LazyOurProducts = React.lazy(() => import('./OurProducts'));
    const LazyWhoWeAre = React.lazy(() => import('./WhoWeAreSection'));
    const LazyMissionVision = React.lazy(() => import('./MissionVison'));
    const LazyCompany = React.lazy(() => import('./Company'));

    function lazyLoading() {
        if (document.getElementById('who-we-are') !== null) {

            var whoWeAreSection = document.getElementById('who-we-are');
            var whoWeAreImage = document.getElementsByClassName('who-we-are__info-container')[0];

            if (whoWeAreSection.getBoundingClientRect().top < window.innerHeight) {
                whoWeAreImage.classList.add('lazy');
            }
        }
    }

    window.addEventListener('scroll', lazyLoading);

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
