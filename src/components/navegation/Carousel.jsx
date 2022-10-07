import React from "react";
import Img1 from "../../assets/img1.png";

import "./Carousel.css";

const Carousel=()=>{
    return (
        <div>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id="margen">
      <img src={Img1} class="d-block w-100" id="img-carousel" alt="..." />
    </div>
    
    <div class="carousel-item" id="margen">
      <img src={Img1} class="d-block w-100" id="img-carousel" alt="..." />
    </div>
  </div>
</div>
        </div>
    );
}

export default Carousel;