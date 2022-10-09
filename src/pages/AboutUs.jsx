import React from 'react';
import _default from '@popperjs/core/lib/modifiers/eventListeners';
import "./AboutUs.css"
import NavBar from "../components/navegation/NavBar/navbar";
import AboutBody from "../components/navegation/About/AboutBody";
import Footer from "../components/navegation/Footer/Footer";

const AboutUs= ()=>{
    return (
        <div>

            <NavBar />
            <AboutBody />
            <Footer />

        </div>

    );   
}

export default AboutUs;