import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/ImageSlider.css";
import bike1 from "../../Assets/all-images/bikes-img/TVS-1.jpeg";
import bike2 from "../../Assets/all-images/bikes-img/TVS-2.jpeg";
import bike3 from "../../Assets/all-images/bikes-img/TVS-3.jpeg";

const arrowStyles = {
  position: "absolute",
  top: "auto",
  bottom: "10px", // Adjust this value to set the distance from the bottom
  transform: "translateY(-50%)", // Center vertically
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
const BikeImageSlider = () => {
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
    bike1,
    bike2,
    bike3,
    // Add more image URLs as needed
  ];

  return (
    <Container className="mt-4 car-slider" style={{ width: "100%" }}>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} className="img-fluid" />
          </div>
        ))}
        {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          </a> */}
      </Slider>
    </Container>
  );
};
export default BikeImageSlider;
