import React from "react";
import Logo from "../../../assets/logo.jpeg";
import "./navbar.css"
import { Link } from "react-router-dom";



function Navbar(){
    return (
     
    <div>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img className= "navImg" src={Logo} alt=".."/> 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className=""><Link to="/">Inicio</Link></div>
        </li>
        <li className="nav-item">
          <div className=""><Link to="/aboutus">Quiénes Somos</Link></div>
        </li>
        <li className="nav-item">
          <div className=""><Link to="/Contact">Contactos</Link></div>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit"><Link to="/Login">Iniciar Sesion y Registrarse</Link></button>
     </form>
    </div>
  </div>
</nav>

    </div>
   
    )
}

export default Navbar;