import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commonsection";
import CarItem from "../components/UI/CarItem";
import carData from "../Assets/data/carData";
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
            <Col lg="12">
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
            </Col>
            {/* <FontAwesomeIcon icon="fa-solid fa-car" /> */}
            {/* <MDBIcon className='ms-1' icon='car' size='lg' /> */}

            {/* <DropdownButton></DropdownButton> */}
            
            {/* <Carfilterform/> */}
            {/* <div className="p-4 bg-black text-white shadow-md rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <Button size="icon" variant="outline">
            <FilterIcon className="h-4 w-4" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="category">
              Category
            </Label>
            <Select className="w-full" id="category">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shoes">Shoes</SelectItem>
                <SelectItem value="tops">Tops & T-Shirts</SelectItem>
                <SelectItem value="hoodies">Hoodies & Pullovers</SelectItem>
                <SelectItem value="tracksuits">Tracksuits</SelectItem>
                <SelectItem value="socks">Socks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="price">
              Price
            </Label>
            <Select className="w-full" id="price">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low to High</SelectItem>
                <SelectItem value="high">High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="brand">
              Brand
            </Label>
            <Select className="w-full" id="brand">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nike">Nike</SelectItem>
                <SelectItem value="adidas">Adidas</SelectItem>
                <SelectItem value="puma">Puma</SelectItem>
                <SelectItem value="reebok">Reebok</SelectItem>
                <SelectItem value="under-armour">Under Armour</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="rating">
              Rating
            </Label>
            <Select className="w-full" id="rating">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 stars and up</SelectItem>
                <SelectItem value="4">4 stars and up</SelectItem>
                <SelectItem value="3">3 stars and up</SelectItem>
                <SelectItem value="2">2 stars and up</SelectItem>
                <SelectItem value="1">1 stars and up</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="color">
              Color
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="size">
              Size
            </Label>
            <Select className="w-full" id="size">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s">Small</SelectItem>
                <SelectItem value="m">Medium</SelectItem>
                <SelectItem value="l">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="availability">
              Availability
            </Label>
            <Select className="w-full" id="availability">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="material">
              Material
            </Label>
            <Select className="w-full" id="material">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="polyester">Polyester</SelectItem>
                <SelectItem value="leather">Leather</SelectItem>
                <SelectItem value="wool">Wool</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="self-end">Reset Filters</Button>
      </div>
    </div>
  ) */}


            
            <Col lg="12">
              <div className="filter-form">
                <ul><i class="ri-car-fill"></i>Buy</ul>
                <ul><i class="ri-refund-2-line"></i>Sell</ul>

                
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
