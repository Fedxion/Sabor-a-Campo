import React from "react";



const Register = () => {
    return (
        <div className="container">
        <div className="form-container">
        <h2>Nueva Cuenta</h2>
            <form className="register-form" action="/register" method="POST">
                <label htmlFor="name" >Nombre</label>
                <input name="name" id="name" placeholder="Pepito" />
                <label htmlFor="lastName">Apellido</label>
                <input name="lastName" id="lastName" placeholder="Perez"/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="tucorreo@gmail.com" id="email" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Crear Cuenta</button>
            </form>
            <button type="submit" className="link-btn">Tienes Cuenta? Iniciar Sesion Aqui!!</button>
         </div>
         </div>
    )
}
export default Register;