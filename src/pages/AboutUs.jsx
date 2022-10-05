import React from 'react';
import Navbar from "./components/navegation/navbar";
import Footer from "./components/Footer";
import _default from '@popperjs/core/lib/modifiers/eventListeners';
import "./AboutUs.css"


function AboutUs (){
    return 
    <>
    <div>
        <Navbar/>
        <div className='contenedor'>
        <div className="container">
            
            <h1>NUESTRA HISTORIA</h1>
            <h4>Sabor a Campo nace en el año 2020 en San Miguel de Tucumán a raíz de un deseo de realización personal y beneficio lucrativo.
                Esta marca ofrece una amplia variedad de productos y servicios enfocados en la experiencia del consumidor, entre ellos: 15 variedades de escabeches y verduras, catering salado, delivery y take away boxes, así como diferentes opciones para eventos sociales y corporativos.

                En el 2021 decidimos evolucionar inaugurando nuestro primer local en el centro de la ciudad de San Miguel de Tucumán.

                Sabor a Campo elabora todos sus productos frescos de manera artesanal, sin conservantes ni aditivos y priorizando la alta calidad de materias primas</h4>
        </div>
        </div>
        <Footer/>
    </div>
    </>
}

export default AboutUs;


