import React from 'react'
import MapView from '../../LeafletMap/MapView'
import styles from './company.module.css'

function Company() {
    return (
        <div>
            <div className={styles.company__container}>
                <div className={styles.company__map}>
                    <a href="https://www.google.com/maps/place/ENSAFE+SAS/@4.6257401,-74.1204962,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9955d6541857:0x44402855ae467a5e!8m2!3d4.6257401!4d-74.1183075" target="_blank" rel="noreferrer" className={styles.company__map_googlemaps}>Ver en google maps</a>
                    <MapView />
                </div>
                <div className={styles.company__info}>
                    <h1 className={styles.company__title}>Nuestra ubicación</h1>
                    <p className={styles.company__description}>Hola!. Si quieres ir personalmente a nuestro domicilio, te ayudaremos con gusto! </p>
                    <div className={styles.presentation_card}>
                        <p className={styles.card__title}>Ensafe SAS</p>
                        <p className={styles.card__subtitle}>Dirección</p>
                        <p>Carrera 62 No. 4G-57, Bogotá</p>
                        <hr className={styles.company__info_hr}/>
                        <p className={styles.card__subtitle}>Horario</p>
                        <p>Atendemos de lunes a viernes: 8:00 AM - 5:00 PM</p>
                        <hr className={styles.company__info_hr}/>
                        <p className={styles.card__subtitle}>Telefono</p>
                        <p>3004930</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
