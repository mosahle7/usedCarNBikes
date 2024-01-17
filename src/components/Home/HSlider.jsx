import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import { styled } from 'styled-components';


const HSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

  return (
    <HeroSlider> 
        <Slider {...settings}>
          <SliderItem>
            <Slider1>
                <Container>
                    <Content>
                        <Text3>For Rent ₹4000 Per Day</Text3>
                        <Text4>Reserve Now and Get 30% Off</Text4>
                        <SButton className="btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </SButton>
                    </Content>
                </Container>
            </Slider1>
            </SliderItem>

            <SliderItem>
            <Slider2>
                <Container>
                    <Content>
                        <Text3>For Rent ₹4000 Per Day</Text3>
                        <Text4>Reserve Now and Get 30% Off</Text4>
                        <SButton className="btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </SButton>
                    </Content>
                </Container>
            </Slider2>
            </SliderItem>
            <SliderItem>
            <Slider3>
                <Container>
                    <Content>
                        <Text3>For Rent ₹4000 Per Day</Text3>
                       <Text4>Reserve Now and Get 30% Off</Text4>
                        <SButton className="btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </SButton>
                    </Content>
                </Container>
            </Slider3>
            </SliderItem>
        </Slider>
    </HeroSlider>
  );
};

export default HSlider;

const HeroSlider = styled.div`
  overflow: hidden;
  width: 100%;
  // height: 100%;
`;

const SliderItem = styled.div `
  max-width: 100%;
  height: 500px;

  @media only screen and (max-width: 992px){
    height: 530px;
    max-width: 100vw;
  }

  @media only screen and (max-width: 768px) {
    height: 450px;
    }
  

`
const Slider1 = styled.div`
    height: 100%;
    background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
    url("/assets/slider-img/slider-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Slider2 = styled.div`
    height: 100%;
    background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
    url("/assets/slider-img/slider-2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Slider3 = styled.div`
    height: 100%;
    background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
    url("/assets/slider-img/slider-3.jpg");
    background-position: center bottom;

    background-repeat: no-repeat;
    background-size: cover;
`;

const Content = styled.div`
  padding-top: 150px;
  color: white;

  @media only screen and (max-width: 992px) {
    margin-top: -50px;
  } 
  // font-size: 1.5rem;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // height: 100%;
`;

const Text3 = styled.h4`
  
`;

const Text4 = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  @media only screen and (max-width: 992px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SButton = styled.button`
  background: #fff;
  color:  #000d6b;
  border: none;
  outline: none;
  padding:  8px 60px; 
  // cursor: pointer;
  > a{
    text-decoration: none;
    font-weight: 600;
    color: #000d6b;

    &:hover {
    color: blue;
    // background: white;
  }
  }
  &:hover {
    background: white;
  }

  
`;
