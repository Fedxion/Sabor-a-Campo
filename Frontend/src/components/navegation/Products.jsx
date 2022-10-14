import React from "react";
import "./Products.css";
import Imga from "../../assets/Berenjena.jpeg";
// import Imgb from "../../assets/Conejo.jpeg";
import Imgc from "../../assets/Pickles.jpeg";
import Imgd from "../../assets/Porotos.jpeg";
// import Imge from "../../assets/Pollo.jpeg";

const Product= () =>{
    return( <section>
        <div className="contenedor-cards">
    <div className="row row-cols-1 row-cols-md-3 g-3" id="tarjetas">
      <div className="col">
        <div className="card">
          <img src={Imga} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title"><b>Berenjenas</b></h5>
            <p className="card-text">Berenjenas en escabeche</p>
            </div>
            <div className="card-linkk">
                    
                    <a href="/" className="card-link">Tienda</a>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={Imgc} className="card-img-top" id="burguer" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><b>Pickles</b></h5>
            <p className="card-text">Pickles mixtos en vinagre</p>
          </div>
          <div className="card-linkk">
                    
                    <a href="/" className="card-link">Tienda</a>
                </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={Imgd} className="card-img-top" id="burguer" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><b>Porotos</b></h5>
            <p className="card-text">Porotos en aceite y agua</p>
          </div>
          <div className="card-linkk">
                    
                    <a href="/" className="card-link">Tienda</a>
                </div>
        </div>
      </div>
    </div>
  </div>
</section>





    );
}

export default Product;