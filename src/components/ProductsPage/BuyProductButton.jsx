import React from 'react'

function BuyProductButton(props) {
    return (
        <div className={props.className}>
            <a className='main-button' target="_blank" href={"https://wa.me/573202894536?text=Buenos%20días%20equipo%20Ensafe,%20quisiera%20consultar%20sobre%20el%20siguiente%20producto:%0A%0A" + props.name + "%0A" + "Referencia:%20" + props.id + "%0A" + "http://" + window.location.host + "/%23/products/" + props.category + "/" + props.id}>Comprar</a>
        </div> 
    )
}

export default BuyProductButton