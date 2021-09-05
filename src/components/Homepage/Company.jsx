import React from 'react'
import MapView from '../LeafletMap/MapView'

function Company() {
    return (
        <div>
            <div className="company__container">
                <div className="company__map">
                    <a href="https://www.google.com/maps/dir/4.7374575,-74.1122502/ensafe/@4.6809944,-74.1636275,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9955d6541857:0x44402855ae467a5e!2m2!1d-74.1182454!2d4.6257052" target="_blank" className="company__map-googlemaps">Ver en google maps</a>
                    <MapView />
                </div>
                <div className="company__info">
                    <h1 className="company__title">Nuestra ubicación</h1>
                    <p className="company__description">Hola!. Si quieres ir personalmente a nuestro domicilio, te ayudaremos con gusto! </p>
                    <div className="presentation-card">
                        <h4>Ensafe SAS</h4>
                        <h6>Dirección</h6>
                        <p>Carrera 62 No. 4G-57, Bogotá</p>
                        <hr />
                        <h6>Horario</h6>
                        <p>Atendemos de lunes a viernes: 8:00 AM - 5:00 PM</p>
                        <hr />
                        <h6>Telefono</h6>
                        <p>3004930</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
