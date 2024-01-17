import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import {styled} from 'styled-components';
import HSlider from '../components/Home/HSlider';
import AboutSection from '../components/Home/AboutSection';
const Home = () => {
    console.log('Rendering home');
  return (
    <>
      <HSlider />
      <AboutSection />
    </>

  );
};
const HSliderWrapper = styled.div`
    margin: 0; /* Remove any margin */
    padding: 0; /* Remove any padding */
`;
export default Home;
