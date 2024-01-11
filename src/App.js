import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/userLayout"

import './App.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/user/" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
