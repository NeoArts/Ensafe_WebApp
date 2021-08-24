import React from 'react'

function ContactUs() {
    return (
        <div>
            <section className="contact-us">
                <div className="form__container">
                    <h1 className="form-title">Formulario de contácto</h1>
                    <p className="form-description">Completa los datos y nos comunicaremos con tigo lo más rapido posible </p>
                    <form action="post" className="form">
                        <label htmlFor="name">Nombre</label><br />
                        <input name="name" type="text" id="name" className="input" /><br />
                        <label htmlFor="email">Correo electrónico</label><br />
                        <input name="email" type="text" id="email" className="input" /><br />
                        <label htmlFor="phone">Teléfono</label><br />
                        <input name="phone" type="text" id="phone" className="input" /><br />
                        <label htmlFor="subject">Asunto</label><br />
                        <input name="subject" type="text" id="subject" className="input menu-vertical" />
                        <label htmlFor="message">Mensage</label><br />
                        <textarea name="message" className="input" id="message" cols="30" rows="10">Hola Ensafe!, </textarea><br />
                        <input value="Enviar" type="submit" className="main-button full-width" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
