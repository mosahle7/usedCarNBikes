import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commonsection";
import BikeItem from "../components/UI/BikeItem";
import bikeData from "../Assets/data/bikeData";
import Filter from "../components/Filter";
import { useState } from "react";
// import {MDBIcon} from "mdb-react-ui-kit"
// import DropdownButton from "../components/UI/Carfilterform";
// const handleAddToWishlist = () => {
//   const newItem = {
//     id: item.id,
//     name: props.item.carName,
//     description: props.item.model,
//   };
//   props.onAddToWishlist(newItem);
// };
const BikeListing = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (newItem) => {
    setWishlist([...wishlist, newItem]);
    // console.log(newItem);
  };
  return (
    // <Helmet title="Cars">
    <>
      <CommonSection title="Bike Listing" />

      <section>
        <Container>
          <Row>
            {/* <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>
                
                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col> */}
            <Col lg="12">
              <div className="filter-form">
                <Filter />
              </div>
            </Col>
            <Col lg="12">
              <div className="filter-form">
                {/* <ul><i class="ri-car-fill"></i>Buy</ul>
                <ul><i class="ri-refund-2-line"></i>Sell</ul> */}
                <h3>
                  --------------------------------------------------------------------------------------------------------------------------------
                </h3>
                <h3>Newly added</h3>
              </div>
            </Col>

            {bikeData.map((item) => (
              <BikeItem
                item={item}
                key={item.id}
                onAddToWishlist={handleAddToWishlist}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BikeListing;
