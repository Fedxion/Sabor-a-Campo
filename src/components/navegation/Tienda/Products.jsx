import React from "react";
import "./Products.css";
import Imga from "../../../assets/Berenjena.jpeg";

import Imgc from "../../../assets/Pickles.jpeg";
import Imgd from "../../../assets/Porotos.jpeg";


const Product= () =>{
    return( <section>
        <div class="contenedor-cards">
    <div class="row row-cols-1 row-cols-md-3 g-3" id="tarjetas">
      <div class="col">
        <div class="card">
          <img src={Imga} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"><b>Berenjenas</b></h5>
            <p class="card-text">Berenjenas en escabeche</p>
            </div>
            <div className="card-linkk">
                    
                    <a href="/" className="card-link">Tienda</a>
            </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={Imgc} class="card-img-top" id="burguer" alt="..." />
          <div class="card-body">
            <h5 class="card-title"><b>Pickles</b></h5>
            <p class="card-text">Pickles mixtos</p>
          </div>
          <div className="card-linkk">
                    
                    <a href="/" className="card-link">Tienda</a>
                </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={Imgd} class="card-img-top" id="burguer" alt="..." />
          <div class="card-body">
            <h5 class="card-title"><b>Porotos</b></h5>
            <p class="card-text">Porotos en aceite y agua</p>
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