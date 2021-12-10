import React from 'react'
import foto from './img/j.jpg';
import foto1 from './img/a.jpeg';
import foto2 from './img/ap.jpg';
const carrusel = () => {

  return(
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={foto} alt="First slide" width="500" height = "550"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto1} alt="Second slide" width="500" height = "550"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto2} alt="Third slide" width="500" height = "550"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   

    )
  }

  export default carrusel;
