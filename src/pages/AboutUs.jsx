import React from 'react';
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
};

export default AboutUs;