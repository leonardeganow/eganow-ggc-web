import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage/HomePage";
import HomePage2 from "../HomePage2/HomePage2";
import HomePage3 from "../HomePage3/HomePage3";
import HomePage4 from "../HomePage4/HomePage4";
import AboutPage from "../AboutPage/AboutPage";
import EventPage from "../EventPage/EventPage";
import EventSinglePage from "../EventSinglePage/EventSinglePage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";
import TeamPage from "../TeamPage/TeamPage";
import TeamSinglePage from "../TeamSinglePage/TeamSinglePage";
import ServicePage from "../ServicePage/ServicePage";
import ServicePageS2 from "../ServicePageS2/ServicePageS2";
import GalleryPage from "../GalleryPage/GalleryPage";
import ShopPage from "../ShopPage";
import ProductSinglePage from "../ProductSinglePage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import OrderRecived from "../OrderRecived";
import BlogPage from "../BlogPage/BlogPage";
import BlogPageLeft from "../BlogPageLeft/BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth/BlogPageFullwidth";
import BlogDetails from "../BlogDetails/BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull/BlogDetailsFull";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide/BlogDetailsLeftSiide";
import ContactPage from "../ContactPage/ContactPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import FaqPage from "../FaqPage";
import VolunteerPage from "../VolunteerPage/VolunteerPage";
import DonatePage from "../DonatePage/DonatePage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";
import GgcRegForm from "../../components/forms/GgcRegForm";
import AgentLoginPage from "../AgentLogin/AgentLoginPage";
import AgentDashboard from "../AgentDashboard/AgentDashboard";
import RegisterUser from "../AgentDashboard/RegisterUser";
import AgentCommission from "../AgentDashboard/AgentCommission";
import AgentRegisteredUsers from "../AgentDashboard/AgentRegisteredUsers";
import AgentChangePin from "../AgentDashboard/AgentChangePin";
import About from "../../components/about/About";
import Terms from "../../components/terms/Terms";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/agentlogin" element={<AgentLoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/agentdashboard" element={<AgentDashboard />}>
            <Route index element={<RegisterUser />} />
            <Route path="transactions" element={<AgentCommission />} />
            <Route path="registeredusers" element={<AgentRegisteredUsers />} />
            <Route path="changepin" element={<AgentChangePin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
