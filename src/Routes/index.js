import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import SelectCandidate from "../pages/SelectCandidate";

const RoutesMain = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/selctcandidate" element={<SelectCandidate />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesMain;
