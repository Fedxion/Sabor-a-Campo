import React from "react";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/4.png";
import Img5 from "../../assets/5.png";

const Gallery = () => {
    return(
        <div className="div-gallery">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src={Img1} className="d-block w-100" id="photo" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Img4} className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Img5} className="d-block w-100"  alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}

export default Gallery;