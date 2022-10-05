import React from "react";
import Logo from "../assets/logo.jpeg";
import "./contact.css"

const Contact=()=>{
    return (<div className="flex-container">
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
        <div className="form__img">
            <div className="img-container">
                <img src={Logo} />
            </div>
         </div> 
      </div>
    );
    } 

export default Contact;