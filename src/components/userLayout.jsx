import React, { Fragment } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"
import Header from "./Header"
import Footer from "./Footer"
// import styled from "styled-components"
// import Routers from "../routers/UserRouters";

const Layout = () => {
  
    return (
      <Fragment>
        <Header />
        
        <main>
          <Outlet></Outlet>
        </main>

        <Footer />
      </Fragment>
    );
  };
  
//   const MainContent = styled.main`
//   // margin-top: 0; /* Remove any top margin */
// `;

  export default Layout;



