import React, { Fragment, useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";

import Home from "./components/Home/Home";
import Element from "./components/Element/Element";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Crypto Market";

  return (
    <Fragment>
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Element />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
