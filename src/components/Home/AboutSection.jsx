import React from 'react';
import {Container, Row, Col} from "reactstrap";
import {styled} from "styled-components";

const AboutSection = () => {
  return (
    <>
    <section
        className="about__section"
        // style={
        //   aboutClass === "aboutPage"
        //     ? { marginTop: "0px" }
        //     : { marginTop: "280px" }
        // }
    >

        <Container>
            <Row>
                <Col lg="6" md="6">
                    <Content>
                        <Subtitle>About us</Subtitle>
                        <Title>Welcome to car rent service</Title>
                        <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
                        </Description>
                    </Content>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
};

export default AboutSection;
const AS = styled.div`

`

const Content = styled.div`

`
const Subtitle = styled.h4`

`

const Title = styled.h2`
`
const Description = styled.p`

`