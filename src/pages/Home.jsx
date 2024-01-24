import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import {styled} from 'styled-components';
import HSlider from '../components/Home/HSlider';
import AboutSection from '../components/Home/AboutSection';
import WHY from '../components/Home/WHY';
import Filter from '../components/Filter';
import CarLogos from '../components/UI/CarLogos';
// import 'output.css'

const Home = () => {
    console.log('Rendering home');
  return (
    <>
      <HSlider />
      {/* <AboutSection /> */}
      <WHY/>
      <Filter/>
      <CarLogos/>
    </>

  );
};
const HSliderWrapper = styled.div`
    margin: 0; /* Remove any margin */
    padding: 0; /* Remove any padding */
`;
export default Home;
