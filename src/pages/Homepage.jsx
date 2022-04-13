import 'leaflet/dist/leaflet.css'
import Divider from '../components/Shared/Divider'
import React, { useEffect, Suspense } from 'react'
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import OurProducts from '../components/Homepage/OurProducts';

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        var menu = document.getElementById('menu');

        if(menu !== null){
            menu.style.top = "4.4725em"
        }

        var categoryHeader = document.getElementById('categoryHeader');

        if(categoryHeader !== null){
            categoryHeader.classList.add('hide');
        }
    }, []);
    
    const LazyWhoWeAre = React.lazy(() => import('../components/Homepage/WhoWeAreSection'));
    const LazyMissionVision = React.lazy(() => import('../components/Homepage/MissionVison'));
    const LazyCompany = React.lazy(() => import('../components/Homepage/Company'));

    return (
        <div>
            <section className="featured-product" id="featured-product">
                <FeaturedProduct/>
            </section>
            <section className="our-products" id="our-products">
                <OurProducts/>
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
