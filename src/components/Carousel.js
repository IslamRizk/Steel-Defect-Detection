import React from 'react';

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
      <div className="carousel-item active">
          <img src="./imgs/slider1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-4">STEEL DEFECT DETECTION</h5>
            <p className="lead">The Steel industry is a huge and very important one, and the quality is essential, so detecting defection is a very important step in production pipeline, it takes much time and effort to detect defections, so it is important to improve the defect detections ways to be efficient.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./imgs/slider2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-4">STEEL DEFECT DETECTION</h5>
            <p className="lead">The Steel industry is a huge and very important one, and the quality is essential, so detecting defection is a very important step in production pipeline, it takes much time and effort to detect defections, so it is important to improve the defect detections ways to be efficient.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./imgs/slider3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-4">STEEL DEFECT DETECTION</h5>
            <p className="lead">The Steel industry is a huge and very important one, and the quality is essential, so detecting defection is a very important step in production pipeline, it takes much time and effort to detect defections, so it is important to improve the defect detections ways to be efficient.</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
