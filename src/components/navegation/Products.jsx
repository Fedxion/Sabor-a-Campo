import React from "react";
import "./Products.css";
import Imga from "../../assets/Berenjena.jpeg";
import Imgb from "../../assets/Conejo.jpeg";
import Imgc from "../../assets/Pickles.jpeg";
import Imgd from "../../assets/Porotos.jpeg";
import Imge from "../../assets/Pollo.jpeg";

const Products = () => {
    return( 
    <>
    
        <div className="cont">
            <div className="card">
                <img src={Imga} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Berenjenas</h5>
                    <p className="card-text">Berenjenas al escabeche</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div><>
            <><div className="cont">
                <div className="card">
                    <img src={Imga} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Berenjenas</h5>
                        <p className="card-text">Berenjenas al escabeche</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        <div className="cont">
            <div>
                <div className="card">
                    <img src={Imga} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Berenjenas</h5>
                        <p className="card-text">Berenjenas al escabeche</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div></>
            <div className="cont">  
                <div className="card">
                    <img src={Imga} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Berenjenas</h5>
                        <p className="card-text">Berenjenas al escabeche</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div> 
            </div></>
            
</>
);
}

export default Products