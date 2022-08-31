import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import CandidateScoreBoard from "../pages/CandidateScoreBoard";

const RoutesMain = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/score" element={<CandidateScoreBoard />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesMain;
