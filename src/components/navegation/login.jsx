import React, { useState } from "react";
import "../navegation/login.css"

const Login =(props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return ( 
        <div className="container">
        <div className="form-container">
        <h2>Iniciar Sesion</h2>
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="tucorreo@gmail.com" id="email" name="email " />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Iniciar Sesion</button>
                <p>Olvidaste tu contrasena? </p>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Eres nuevo? Registrarse Aqui</button>
        </div>
        </div>
    )
}

export default Login;