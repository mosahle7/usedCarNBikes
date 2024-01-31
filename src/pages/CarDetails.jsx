import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/CarDetails.css";
import car1 from '../Assets/all-images/cars-img/bmw-offer.png';
import car2 from '../Assets/all-images/cars-img/mercedes-offer.png';
import car3 from '../Assets/all-images/cars-img/nissan-offer.png';



const arrowStyles = {
  position: 'absolute',
  top: 'auto',
  bottom: '10px', // Adjust this value to set the distance from the bottom
  transform: 'translateY(-50%)', // Center vertically
};


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow style={arrowStyles} />,
    nextArrow: <NextArrow style={arrowStyles} />,
  };

  const images = [
    car1,
    car2,
    car3,
    // Add more image URLs as needed
  ];

  return (
    <Container className="mt-4 car-slider">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="img-fluid" />
          </div>
        ))}
        {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          </a> */}
      </Slider>
    </Container>
  );
};

const PrevArrow = ({ onClick }) => (
  <button type="button" className="slick-prev custom-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button type="button" className="slick-next custom-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);



  // <!-- Left and right controls -->
  // <a class="carousel-control-prev" href="#demo" data-slide="prev">
  //   <span class="carousel-control-prev-icon"></span>
  // </a>
  // <a class="carousel-control-next" href="#demo" data-slide="next">
  //   <span class="carousel-control-next-icon"></span>
  // </a>


export default ImageSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import "../styles/CarDetails.css";
// import car1 from '../Assets/all-images/cars-img/bmw-offer.png';

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   const images = [
//     car1,
//     car1,
//     car1,
//     // Add more image URLs as needed
//   ];

//   return (
//     <div id="demo" className="carousel slide" data-ride="carousel">
//       {/* Indicators */}
//       <ul className="carousel-indicators">
//         {images.map((_, index) => (
//           <li key={index} data-target="#demo" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
//         ))}
//       </ul>

//       {/* The slideshow */}
//       <div className="carousel-inner">
//         {images.map((imageUrl, index) => (
//           <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//             <img src={imageUrl} alt={`Slide ${index + 1}`} className="img-fluid" />
//           </div>
//         ))}
//       </div>

//       {/* Left and right controls */}
//       <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true">
//           <PrevArrow />
//         </span>
//       </a>
//       <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true">
//           <NextArrow />
//         </span>
//       </a>
//     </div>
//   );
// };

// const PrevArrow = () => (
//   <div className="slick-arrow custom-arrow custom-prev">
//     <FontAwesomeIcon icon={faChevronLeft} />
//   </div>
// );

// const NextArrow = () => (
//   <div className="slick-arrow custom-arrow custom-next">
//     <FontAwesomeIcon icon={faChevronRight} />
//   </div>
// );

// export default ImageSlider;

