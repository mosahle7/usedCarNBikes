import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commonsection";
import CarItem from "../components/UI/CarItem";
import carData from "../Assets/data/carData";
import Filter from '../components/Filter';
// import {MDBIcon} from "mdb-react-ui-kit"
// import DropdownButton from "../components/UI/Carfilterform";

const CarListing = () => {
  return (
    // <Helmet title="Cars">
    <>
      <CommonSection title="Car Listing" />

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
                <Filter/>
              </div>
            </Col>
            <Col lg="12">
              <div className="filter-form">
                {/* <ul><i class="ri-car-fill"></i>Buy</ul>
                <ul><i class="ri-refund-2-line"></i>Sell</ul> */}
                <h3>--------------------------------------------------------------------------------------------------------------------------------</h3>
                <h3>Newly added</h3>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      </>
  );
};

export default CarListing;
