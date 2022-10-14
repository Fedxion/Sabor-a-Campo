import React from "react";
import "../navegation/login.css"

const Login =() => {
    return ( 
        <div className="container">
        <div className="form-container">
        <h2>Iniciar Sesion</h2>
            <form className="login-form" action="/login" method="POST">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="tucorreo@gmail.com" id="email" name="username " />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Iniciar Sesion</button>
                <p>Olvidaste tu contrasena? </p>
            </form>
            <button type= "submit" className="link-btn">Eres nuevo? Registrarse Aqui</button>
        </div>
        </div>
    )
}

export default Login;