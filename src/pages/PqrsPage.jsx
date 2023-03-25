import React, { useEffect } from 'react'

function Pqrspage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        var menu = document.getElementById('menu');

        if(menu !== null){
            menu.style.top = "4.4725em"
        }
    }, []);

    function sendEmail(){
        var formEl = document.forms.pqrsForm;
        var formData = new FormData(formEl);
        var checkBox = document.getElementById('checkMails');
        var name = formData.get('name');
        var email = formData.get('email');
        var phone = formData.get('phone');
        var subject = formData.get('subject');
        var message = formData.get('message');

        if(checkBox.checked)
            message = message + "%0AManifiesto que autorizo el envío de E-mails por parte de Ensafe SAS a mi buzón correos electrónicos"
        
        if(hasWhiteSpace(name) || hasWhiteSpace(email) || hasWhiteSpace(phone) || hasWhiteSpace(subject) || hasWhiteSpace(message)){
            document.getElementById('formError').style.display = "block";
        }
        else{
            document.getElementById('formError').style.display = "none";
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ventas@ensafecolombia.com&su=" + subject + ": " + name + "&body=" + message + "%0A%0AAtt: " + name + ".%0AEmail: " + email + ".%0ACelular: " + phone + ".");
        }
    }

    function hasWhiteSpace(value) {
        if (!value.replace(/\s/g, '').length) {
            return true;
        }

        if(value === ""){
            return true;
        }

        return false;
    }

    return (
        <div>
            <section className="pqrs" id='pqrsSection'>
                <div className="form__container">
                    <h1 className="form-title">Formulario de peticiones, quejas, reclamos o sugerencias</h1>
                    <p className="form-description">Por favor completa todos los campos, recibiremos la información proporcionada y responderemos en el menor tiempo posible. </p>
                    <form action="post" className="form" id='pqrsForm'>
                        <label htmlFor="name">Nombre</label><br />
                        <input name="name" type="text" id="name" className="input" /><br />
                        <label htmlFor="email">Correo electrónico</label><br />
                        <input name="email" type="email" id="email" className="input" /><br />
                        <label htmlFor="phone">Teléfono</label><br />
                        <input name="phone" type="number" id="phone" className="input" /><br />
                        <label htmlFor="subject">Asunto</label><br />
                        <select name="subject" id="subject" className="input"><br />
                            <option value="">Escoge un asunto</option>
                            <option value="Petición">Petición</option>
                            <option value="Queja">Queja</option>
                            <option value="Reclamo">Reclamo</option>
                            <option value="Sugerencia">Sugerencia</option>
                        </select><br />
                        <label htmlFor="message">Mensage</label><br />
                        <textarea name="message" className="input" id="message" cols="30" rows="10">Hola equipo Ensafe, </textarea><br />
                        <input name="checkMails" type="checkbox" style={{marginRight: "3px"}} id="checkMails"/>
                        <label htmlFor="checkMails">Autorizo el envío de E-mails por parte de Ensafe SAS a mi buzón correos electrónicos</label><br /><br />
                    </form>
                    <button className="main-button full-width" onClick={sendEmail}>Enviar</button>
                    <div id='formError' style={{textAlign: "center", marginTop: "0.3125em", color: "red", fontWeight: "bold", display: "none"}}>Por favor llena todos los campos con los valores correctos</div>
                </div>
            </section>
        </div>
    )
}

export default Pqrspage
