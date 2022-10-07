import React from "react";
import "./Prod.css";
import Imga from "../../assets/Berenjena.jpeg";
import Imgb from "../../assets/Conejo.jpeg";
import Imgc from "../../assets/Pickles.jpeg";
import Imgd from "../../assets/Porotos.jpeg";
import Imge from "../../assets/Pollo.jpeg";

const Prod= () =>{
    return( <section>
        <div class="contenedor-cards">
    <div class="row row-cols-1 row-cols-md-3 g-3" id="tarjetas">
      <div class="col">
        <div class="card">
          <img src={Imga} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Berenjenas</h5>
            <p class="card-text">Berenjenas en escabeche</p>
            </div>
            <div className="card-linkk">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Tienda</a>
            </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={Imgc} class="card-img-top" id="burguer" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pickles</h5>
            <p class="card-text">Pickles mixtos</p>
          </div>
          <div className="card-linkk">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Tienda</a>
                </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={Imgd} class="card-img-top" id="burguer" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Porotos</h5>
            <p class="card-text">Porotos en aceite y agua</p>
          </div>
          <div className="card-linkk">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Tienda</a>
                </div>
        </div>
      </div>
    </div>
  </div>
</section>





    );
}

export default Prod;