import React from "react";
import Logo from "../../assets/logo.jpeg";
import "./navbar.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/contact";
import Home from "../../pages/homePage";
import LoginRegister from "./LoginRegister";


function Navbar(){
    return (
      
    <div>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#" >
    <img className= "navImg" src={Logo} /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link to="/" className="nav-link" >Inicio</Link> 
        </li>
        <li className="nav-item">
          <Link to="/ABoutUs" className="nav-link">Quienes Somos</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contactos</Link>
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