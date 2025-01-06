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
import Events from "../Pages/Events/events";
import BecomeAnMember from "../Pages/BecomeAMember/becomeAnMember";
import BlogPage from "../Pages/Blogs/blogs";
import AdminLogin from "../Pages/AdminLogin/AdminLogin"
import AdminTable from "../Pages/AdminLogin/AdminTable"
function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aatral-india" element={<AatralPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/home/get" element={<HomeGetPage />} />
      <Route path="/members" element={<Members />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/become-a-member" element={<BecomeAnMember />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-table" element={<AdminTable />} />
    </Routes>
  );
}

export default MainRouter;
