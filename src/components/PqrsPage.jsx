import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

function Pqrspage() {
    return (
        <div>
            <NavBar />
            <section className="pqrs">
                <div className="form__container">
                    <h1 className="form-title">Formulario de peticiones, quejas, reclamos o sugerencias</h1>
                    <p className="form-description">Por favor completa todos los campos, recibiremos la información proporcionada y responderemos en el menor tiempo posible. </p>
                    <form action="post" className="form">
                        <label htmlFor="name">Nombre</label><br />
                        <input name="name" type="text" id="name" className="input" /><br />
                        <label htmlFor="email">Correo electrónico</label><br />
                        <input name="email" type="text" id="email" className="input" /><br />
                        <label htmlFor="phone">Teléfono</label><br />
                        <input name="phone" type="text" id="phone" className="input" /><br />
                        <label htmlFor="subject">Asunto</label><br />
                        <select name="subject" id="subject" className="input"><br />
                            <option value="">Escoge un asunto</option>
                            <option value="petition">Petición</option>
                            <option value="complain">Queja</option>
                            <option value="claim">Reclamo</option>
                            <option value="suggestion">Sugerencia</option>
                        </select><br />
                        <label htmlFor="message">Mensage</label><br />
                        <textarea name="message" className="input" id="message" cols="30" rows="10">Hola Ensafe!, </textarea><br />
                        <input value="Enviar" type="submit" className="main-button full-width" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Pqrspage
