import React from 'react'
import { Map, Popup, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LocationIcon } from './LocationIcon'

const position = ['4.6258345345848015', '-74.11827224655909']

const MapView = () => {
    return (
        <Map center={position} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={LocationIcon}>
                <Popup>
                    EnsafeSAS <br />
                </Popup>
            </Marker>
        </Map>
    )
}

export default MapView
