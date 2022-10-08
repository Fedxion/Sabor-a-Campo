import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/contact";
import Home from "../../pages/homePage";

const Footer=()=>{
    return (
        <Router>
    <div>
    <footer className="pie">
            <div className="grupo1">
                                        
                            <div className='box'>
                                <div className='img'>
                                <ul>
                                    <li><img className="logo" src= {Logo} alt="" /></li>
                                </ul>
                                </div>
                            </div>

                            <div className='box'>
                                <h2>SABOR A CAMPO</h2>
                               <div className="link">
                                    <a><Link to="/">Inicio</Link></a>
                                </div>
                                <div className="link">
                                    <a><Link to="/AboutUs">Quienes Somos</Link></a>
                                </div>
                                <div className="link">
                                    <a><Link to="/Contact">Contactos</Link></a>
                                </div>
                            </div>
            
            
                            <div className='box'>
                                <h2>REDES SOCIALES</h2>
                                
                                <div className='red-social'>
                                    <a className="icon" href="#"><i className="fab fa-facebook"></i></a>
                                    <a className="icon" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="icon" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="icon" href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                    


            </div>


                    <div className='grupo3'>
                        <p className='copy'>
                             &copy;{new Date().getFullYear()} Copyright
                        </p>
                    </div>

                
            
    </footer>
   
     
   </div>
   </Router>
   )
}

export default Footer;