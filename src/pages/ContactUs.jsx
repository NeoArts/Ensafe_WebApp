import React, { useEffect } from 'react'

function ContactUs() {

    useEffect(() => {
        //window.scrollTo(0, 0);

        window.scroll({
            top: 0,
            behavior: 'auto'
        });

        var menu = document.getElementById('menu');
        var categoryHeader = document.getElementById('categoryHeader');

        if(categoryHeader !== null){
            categoryHeader.classList.add('hide');
        }

        if(menu !== null){
            menu.style.top = "4.4725em"
        }
    }, []);

    function sendEmail(){
        var formEl = document.forms.contactUsForm;
        var formData = new FormData(formEl);
        var checkBox = document.getElementById('checkMails');

        var name = formData.get('name');
        var email = formData.get('email');
        var phone = formData.get('phone');
        var subject = formData.get('subject');
        var message = formData.get('message');

        if(checkBox.checked)
            message = message + "%0AManifiesto que autorizo el envío de E-mails por parte de Ensafe SAS a mi de buzón correos electrónicos"
    
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
            <section className="contact-us" id='contactUsSection'>
                <div className="form__container">
                    <h1 className="form-title">Formulario de contácto</h1>
                    <p className="form-description">Completa los datos y nos comunicaremos con tigo lo más rapido posible </p>
                    <form action="post" className="form" id='contactUsForm'>
                        <label htmlFor="name">Nombre</label><br />
                        <input name="name" type="text" id="name" className="input" /><br />
                        <label htmlFor="email">Correo electrónico</label><br />
                        <input name="email" type="email" id="email" className="input" /><br />
                        <label htmlFor="phone">Teléfono</label><br />
                        <input name="phone" type="number" id="phone" className="input" /><br />
                        <label htmlFor="subject">Asunto</label><br />
                        <input name="subject" type="text" id="subject" className="input menu-vertical" />
                        <label htmlFor="message">Mensage</label><br />
                        <textarea name="message" className="input" id="message" cols="30" rows="10">Hola equipo Ensafe, </textarea><br />
                        <input name="checkMails" type="checkbox" style={{marginRight: "3px"}} id="checkMails"/>
                        <label htmlFor="checkMails">Autorizo el envío de E-mails por parte de Ensafe SAS a mi buzón de correos electrónicos</label><br /><br />
                    </form>
                    <button className="main-button full-width" onClick={sendEmail}>Enviar</button>
                    <div id='formError' style={{textAlign: "center", marginTop: "0.3125em", color: "red", fontWeight: "bold", display: "none"}}>Por favor llena todos los campos con los valores correctos</div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
