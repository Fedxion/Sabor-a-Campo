import React from "react";
import Logo from "../../../assets/logo.jpeg";
import "./navbar.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../../../pages/AboutUs";
import Contact from "../../../pages/contact";
import Home from "../../../pages/homePage";
import LoginRegister from "../LoginRegister/LoginRegister";


function Navbar(){
    return (
      <Router>
    <div>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img className= "navImg" src={Logo} /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" ><Link to="/">Inicio</Link></a> 
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/AboutUs">Quienes Somos</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/Contact">Contactos</Link></a> 
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit"><Link to="/Login">Iniciar Sesion y Registrarse</Link></button>
     </form>
    </div>
  </div>
</nav>
<Routes>
    
    <Route path='/AboutUs' element={<AboutUs />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/Login" element={<LoginRegister />}/>
    <Route exact path='/' element={<Home />}/>
    
</Routes>
    </div>
    </Router>
    )
}

export default Navbar;