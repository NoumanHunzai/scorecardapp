import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import SummaryPage from "../pages/summaryPage";
import CandidateScoreBoard from "../pages/CandidateScoreBoard";
import SelectCandidate from "../pages/SelectCandidate";

const RoutesMain = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
         
          <Route exact path="/" element={<Home />} />
          <Route exact path="/summary" element={<SummaryPage/>} />
          <Route exact path="/score" element={<CandidateScoreBoard />} />
          <Route exact path="/selectcandidate" element={<SelectCandidate />} />

        </Routes>
      </Router>
    </div>
  );
};

export default RoutesMain;
