import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { styled } from 'styled-components';
const WHY = () => {
  return (
    <section>
        {/* <Container> */}
            <Content>
                <Title className = "mb-5 text-center">
                    Why Used Cars & Bikes?
                </Title>
                <Container>
                    <Row>
                        <Col lg="4" md="4" className='mb-2 text-center'>
                        <Iimg src="/assets/item1.svg" alt="A descriptive text about the image"/>
                            <ITitle>Transparent pricing</ITitle>
                            <ItemCont>
                            No surprises here. See how much you'll pay on cars you like.
                            </ItemCont>
                        </Col>

                        <Col lg="4" md="4" className='text-center'>
                        <Iimg src="/assets/item2.svg" alt="A descriptive text about the image"/>
                            <ITitle>Minutes, not hours</ITitle>
                            <ItemCont>
                            No surprises here. See how much you'll pay on cars you like.
                            </ItemCont>
                        </Col>

                        <Col lg="4" md="4" className='text-center'>
                        <Iimg src="/assets/item3.svg" alt="A descriptive text about the image"/>
                            <ITitle>Shop your way</ITitle>
                            <ItemCont>
                            No surprises here. See how much you'll pay on cars you like.
                            </ItemCont>
                        </Col>
                    </Row>
                </Container>
            </Content>
        {/* </Container> */}

    </section>

  );
};

export default WHY;
const Title = styled.h2`
    font-weight: 600 !important;
`
const Content = styled.div`
width: 100% !important;
background: black !important;
color: white !important;
`
const ITitle = styled.h4`
font-weight: 500 !important;;
`
const ItemCont = styled.div`

`
const Iimg = styled.img`
&&& {
    width: 100px;
    height: 100px;
  }
`;