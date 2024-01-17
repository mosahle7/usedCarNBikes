import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/userLayout"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import CarListing from "./pages/cars";

import './App.css';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
         {/* <Route element={<Home />} /> */}

        <Route
        path="/" 
        element={
        <AuthContextProvider>
          <Layout/> 
          </AuthContextProvider>
        }>
          <Route index element = {<Home/>}/>
          <Route path="/cars" element= {<CarListing/>} />


        {/* <Route path="/user/" element={<Layout />} /> */}
      </Route>
      <Route path ='login' element={<AuthContextProvider> <Login/> </AuthContextProvider>}/>
        <Route path ='signup' element={<AuthContextProvider> <SignUp/> </AuthContextProvider>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
