import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import CandidateScoreBoard from "../pages/CandidateScoreBoard";
import SelectCandidate from "../pages/SelectCandidate";
import General from "../pages/General";
import Knowledge from "../pages/Knowledge";
import Global from "../pages/Global";
import Values from "../pages/Values";

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
          <Route exact path="/selectcandidate" element={<SelectCandidate />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesMain;
