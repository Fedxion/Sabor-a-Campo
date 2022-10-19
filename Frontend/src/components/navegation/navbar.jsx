import React from "react";
import Logo from "../../assets/logo.jpeg";
import "./navbar.css"
import { Link } from "react-router-dom";
// import {Nav} from 'react-bootstrap'
// import AboutUs from "../../pages/AboutUs";
// import Contact from "../../pages/contact";
// import Home from "../../pages/homePage";
// import LoginRegister from "./LoginRegister";


function Navbar(){
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <div className="navbar-brand" href="#">
    <img className= "navImg" alt="logo "src={Logo} /> </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <div className="nav-link" ><Link as={Link} to="/">Inicio</Link></div> 
        </li>
        <li className="nav-item">
          <div className="nav-link"><Link as={Link} to="/aboutus">Quienes Somos</Link></div>
        </li>
        <li className="nav-item">
          <div className="nav-link"><Link as={Link} to="/contact">Contactos</Link></div> 
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit"><Link as={Link} to="/register">Registrarse</Link></button>
      <button className="btn btn-outline-success" type="submit"><Link as={Link} to="/login">Iniciar sesión</Link></button>
     </form>
    </div>
  </div>
</nav>
    </div>
    )
}

export default Navbar;