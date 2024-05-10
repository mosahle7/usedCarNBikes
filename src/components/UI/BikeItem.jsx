import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import AddToWishlistButton from "./AddToWishlistButton";
import "../../styles/car-item.css";
import { useState } from "react";

const BikeItem = (props) => {
  const { imgUrl, model, BikeName, automatic, speed, price, kilometer, fuel } =
    props.item;
  // const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = () => {
    const newItem = {
      id: props.item.id,
      name: props.item.BikeName,
      description: props.item.model,
    };
    // setWishlist([...wishlist, newItem]);
    props.onAddToWishlist(newItem);
    console.log("Item added to wishlist:", newItem);
  };
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <Link to="/bike-details">
            <img src={imgUrl} alt="" className="w-100" />
          </Link>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{BikeName}</h4>
          <AddToWishlistButton onClick={handleAddToWishlist} />
          <h6 className="rent__price text-center mt-4">₹{price}</h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-car-line"></i> {kilometer} */}
              <p>{kilometer}</p>
            </span>
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-settings-2-line"></i> {automatic} */}
              <p>{automatic}</p>
            </span>
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-timer-flash-line"></i> {speed} */}
              <p>{fuel}</p>
            </span>
          </div>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          {/* <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button> */}
        </div>
      </div>
    </Col>
  );
};

export default BikeItem;
