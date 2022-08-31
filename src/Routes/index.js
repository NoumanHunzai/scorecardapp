import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import SummaryPage from "../pages/summaryPage";

const RoutesMain = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<SummaryPage/>} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesMain;
