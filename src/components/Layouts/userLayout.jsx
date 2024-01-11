import React, { Fragment } from "react";

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
// import Routers from "../../routers/UserRouters";


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