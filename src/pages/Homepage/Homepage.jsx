import 'leaflet/dist/leaflet.css'
import Divider from '../../components/Shared/Divider/Divider'
import React, { useEffect, Suspense } from 'react'
import FeaturedProduct from '../../components/Homepage/FeaturedProduct';
import OurProducts from '../../components/Homepage/OurProducts';
import styles from './homepage.module.css'

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
    
    const LazyWhoWeAre = React.lazy(() => import('../../components/Homepage/WhoWeAreSection'));
    const LazyMissionVision = React.lazy(() => import('../../components/Homepage/MissionVison'));
    const LazyCompany = React.lazy(() => import('../../components/Homepage/Company/Company'));

    return (
        <div>
            <section className={styles.featured_product} id="featured-product">
                <FeaturedProduct/>
            </section>
            <section className={styles.our_products} id="our-products">
                <OurProducts/>
                <Divider title="¿Quienes somos?" className="relative_item" color="#2A2E92" background="#fff" id="who-we-are-divider" />
            </section>
            <section className={styles.who_we_are} id="who-we-are">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyWhoWeAre />
                </Suspense>
            </section>
            <section className={styles.mission} id='mission-vision'>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyMissionVision />
                </Suspense>
                <Divider title="Empresa" className="relative_item" color="#2A2E92" id="company-divider" />
            </section>
            <section className={styles.company} id='company'>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyCompany />
                </Suspense>
                <Divider title="Subir" className="relative_item_margin_right" up={true} color="#2A2E92" id="up-divider" />
            </section>
        </div>
    )
}

export default Homepage
