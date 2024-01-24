import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import carlogo1 from "../../Assets/all-images/car_company-logos/maruti-suzuki-logo.jpg";
import carlogo2 from "../../Assets/all-images/car_company-logos/hyundai-logo.jpg";
import carlogo3 from "../../Assets/all-images/car_company-logos/toyota-logo.jpg";



const CarLogos = () => {
  const carBrands = [
    { name: 'Maruti Suzuki', logo: carlogo1 },
    { name: 'Hyundai', logo: carlogo2 },
    { name: 'Toyota', logo: carlogo3 },
    // Add more car brands as needed
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Car Brands</h2>
      <Row className="justify-content-center">
        {carBrands.map((brand, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <img src={brand.logo} alt={brand.name} className="img-fluid" />
            <p className="mt-2">{brand.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarLogos;
