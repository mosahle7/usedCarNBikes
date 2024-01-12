import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Layout from "./components/userLayout"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

import './App.css';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={
        <AuthContextProvider>
          <Layout/> </AuthContextProvider>}>
        <Route path="/user/" element={<Layout />} />
        </Route>
        <Route path ='login' element={<AuthContextProvider> <Login/> </AuthContextProvider>}/>
        <Route path ='signup' element={<AuthContextProvider> <SignUp/> </AuthContextProvider>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
