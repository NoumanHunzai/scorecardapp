import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";

const RoutesMain = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
};

export default RoutesMain;
