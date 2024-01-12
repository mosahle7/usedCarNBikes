import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import Header from "./Header"
import Footer from "./Footer"


const Layout = () => {
  
    return (
      <Fragment>
        <Header />
        
        <div>
          {/* <Routers /> */}
          <h1>hi</h1>
        </div>
        <Footer />
      </Fragment>
    );
  };
  
  export default Layout;