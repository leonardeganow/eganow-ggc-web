import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import Features from "../../components/Features/Features";
import About from "../../components/about/about";
import CampaignSection from "../../components/CampaignSection/CampaignSection";
import MissionVission from "../../components/MissionVission/MissionVission";
import EventSection from "../../components/EventSection/EventSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-4"} />
      <Hero />
      <Features />
      {/* <About /> */}
      {/* <CampaignSection /> */}
      <MissionVission />
      {/* <EventSection /> */}
      {/* <BlogSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
