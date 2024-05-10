import React, { useRef } from "react";
// import { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/header.css";
import secondgear from "../Assets/all-images/Second Gear (5).png";
// import secondgear from "../Assets/all-images/Second_Gear-removebg-preview.png"
import logo from "../Assets/all-images/logo.png";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/bikes",
    display: "Bikes",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/wishlist",
    display: "wishlist",
  },
  {
    path: "/user/contact",
    display: "Contact",
  },
];

// var user = "logged in"

const Header = () => {
  const menuRef = useRef(null);
  const { logged, logout } = useAuth();

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +91-1234567890
                </span>
              </div>
            </Col>

            {/* <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/signup" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col> */}

            {logged ? (
              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  <Link
                    to="/login"
                    onClick={logout}
                    className=" d-flex align-items-center gap-1"
                  >
                    <i class="ri-logout-circle-line"></i> Logout
                  </Link>
                </div>
              </Col>
            ) : (
              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  <Link to="/login">
                    <i class="ri-login-circle-line"></i> Login
                  </Link>
                  <Link
                    to="/signup"
                    className=" d-flex align-items-center gap-1"
                  >
                    <i class="ri-user-line"></i> SignUp
                  </Link>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link
                    to="/"
                    className="header_logo d-flex align-items-center gap-2"
                  >
                    {/* <i class="ri-car-line"></i> */}
                    {/* <span>
                      Second <br /> Gear
                    </span> */}
                    <img className="company-logo" src={secondgear}></img>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2 d-none d-lg-block">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content d-none d-lg-block">
                  <h4>India</h4>
                  <h6>Kerala, India</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2 d-none d-lg-block">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content d-none d-lg-block">
                  <h4>Sunday to Friday</h4>
                  <h6>9am - 6pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn d-none d-lg-block">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search for Cars or Bikes, Eg:XUV700"
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
