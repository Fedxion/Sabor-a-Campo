import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.jpeg";

const Footer=()=>{
    return <div>
    
    
    <footer className="pie">
            <div className="grupo1">
                                        
                            <div className='box'>
                                <div className='img'>
                                <ul>
                                    <li><img src= {Logo} alt="" /></li>
                                </ul>
                                </div>
                            </div>

                            <div className='box'>
                                <h2>SABOR A CAMPO</h2>
                               <div className="link">
                                    <a href="#">Inicio</a>
                                </div>
                                <div className="link">
                                    <a href="#">Quiénes Somos</a>
                                </div>
                                <div className="link">
                                    <a href="#">Contacto</a>
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
}

export default Footer;