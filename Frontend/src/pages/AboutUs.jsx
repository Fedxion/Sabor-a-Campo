import React from 'react';
// import _default from '@popperjs/core/lib/modifiers/eventListeners';
import "./AboutUs.css"
import Imagen from "../assets/conserva.jpg";

const AboutUs= ()=>{
    return (<div>
        <div className='contenedor'>
                    
            <h1>NUESTRA HISTORIA</h1>
            <br />
            <h4>Sabor a Campo nace en el año 2020 en San Miguel de Tucumán a raíz de un deseo de realización personal y beneficio lucrativo.</h4>
            <h4>Esta marca ofrece una amplia variedad de productos y servicios enfocados en la experiencia del consumidor, entre ellos: 15 variedades de escabeches y verduras, catering salado, delivery y take away boxes, así como diferentes opciones para eventos sociales y corporativos.</h4>

            <h4>En el 2021 decidimos evolucionar inaugurando nuestro primer local en el centro de la ciudad de San Miguel de Tucumán.</h4>

            <h4>Sabor a Campo elabora todos sus productos frescos de manera artesanal, sin conservantes ni aditivos y priorizando la alta calidad de materias primas</h4>
            <img className="img-conserva" alt="Conserva" src={Imagen}></img>
        </div>
    </div>
    );   
}

export default AboutUs;