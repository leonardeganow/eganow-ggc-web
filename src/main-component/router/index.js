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

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-4" element={<HomePage4 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-s2" element={<ServicePageS2 />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='faq' element={<FaqPage />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
