import L from 'leaflet'
import placeholder from '../../assets/images/placeholder.svg'

const LocationIcon = L.icon({
    iconUrl: placeholder,
    iconRetinaUrl: placeholder,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 35),
    className: 'leaflet-div-icon'
});

export { LocationIcon };