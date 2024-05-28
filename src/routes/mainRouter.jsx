import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Home from "../Pages/Home/Home";
import AatralPage from "../Pages/Aatral/AatralPage";
import DetailsPage from "../Pages/Details/detailsPage";
import Members from "../Pages/Members/Members";
import HomeGetPage from "../Pages/Home/Get";
import Partners from "../Pages/Partners/partnersPage";
import Contact from "../Pages/Contact/Contact";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aatral-india" element={<AatralPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/home/get" element={<HomeGetPage />} />
      <Route path="/members" element={<Members />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MainRouter;
