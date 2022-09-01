import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import SummaryPage from "../pages/summaryPage";
import CandidateScoreBoard from "../pages/CandidateScoreBoard";
import SelectCandidate from "../pages/SelectCandidate";

import General from "../pages/General";
import Knowledge from "../pages/Knowledge";
import Global from "../pages/Global";
import Values from "../pages/Values";

import Login from "../pages/login";

const RoutesMain = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="score" element={<CandidateScoreBoard />}>
            <Route path="general" element={<General />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="global" element={<Global />} />
            <Route path="values" element={<Values />} />
          </Route>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/score" element={<CandidateScoreBoard />} />
          <Route exact path="/selectcandidate" element={<SelectCandidate />} />

          <Route exact path="/summary" element={<SummaryPage />} />
          <Route exact path="/score" element={<CandidateScoreBoard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesMain;
