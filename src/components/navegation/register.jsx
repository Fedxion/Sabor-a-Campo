import React, { useState } from "react";



export const Register =(props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
        <div className="form-container">
        <h2>Nueva Cuenta</h2>
            <form className="register-form"onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="Pepito" />
                <label htmlFor="lastName">Apellido</label>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} name="lastName" id="lastName" placeholder="Perez"/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="tucorreo@gmail.com" id="email" name="email " />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Crear Cuenta</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Tienes Cuenta? Iniciar Sesion Aqui!!</button>
         </div>
         </div>
    )
}