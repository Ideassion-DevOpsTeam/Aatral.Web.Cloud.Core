import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Home from "../Pages/Home/Home";
import AatralPage from "../Pages/Aatral/AatralPage";
import DetailsPage from "../Pages/Details/detailsPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aatral-india" element={<AatralPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default MainRouter;
