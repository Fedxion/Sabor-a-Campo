import React from "react";              
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/homePage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/contact";
import LoginRegister from "./navegation/LoginRegister";


const Rutas = () =>{
    return (
        <div>
        <Router>
            <Routes>
                 <Route exact path='/' component={ Home }/>
                 <Route exact path='/AboutUs' component={ AboutUs }/>
                 <Route exact path="/Contact" component={ Contact }/>
                 <Route exact path="/Login" component={ LoginRegister }/>
            </Routes>
        </Router>

        </div>
    )
}

export default Rutas;