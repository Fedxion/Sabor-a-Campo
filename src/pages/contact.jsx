import React from "react";

import "./contact.css"

function Contact(){
    return <div className="flex-container">
        <form className="form">
            <div className="form__section">
               <input  type="text" placeholder="Nombre" className="form__input" />
            </div>
            <div className="form__section">
               <input type="email" placeholder="Direccion de correo electronico" class="form__input" />
            </div>
            <div className="form__section">
               <input type="text" placeholder="Telefono" className="form__input" />
            </div>
            <div>
               <textarea placeholder="Mensaje" className="form__input"></textarea>
            </div>
            
            <button className="btn btn-outline-success form_buttom" type="submit">Enviar</button>
        </form>
        
      </div>
    } 

export default Contact;