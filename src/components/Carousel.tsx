import React from 'react';


const Carousel = () => {
  return (
    // <div className="bg-blue-600 h-screen overflow-hidden">
    <div className="carousel w-full h-[calc(100vh-60px)] mt-[60px] ">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src="Ads 1.png" className="w-full h-full " alt="Slide 1" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="Ads 2.png" className="w-full h-full " alt="Slide 2" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="car1.jpg" className="w-full h-full " alt="Slide 3" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src="key.jpg" className="w-full h-full " alt="Slide 4" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src="carrental.jpg" className="w-full h-full " alt="Slide 5" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src="rental-car1.jpg" className="w-full h-full " alt="Slide 6" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    // </div>
    
    
  );
};

export default Carousel;
