import React from "react";
import Logo from "../assets/logo.jpeg";
import Conserva from "../assets/conserva.jpg";

const Carousel=()=>{
    return (
        <div>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Logo} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Conserva} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Logo} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
        </div>
    )
}

export default Carousel;