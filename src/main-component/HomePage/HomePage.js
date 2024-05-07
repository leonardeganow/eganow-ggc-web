import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import Features from "../../components/Features/Features";
// import About from "../../components/about/about";
import MissionVission from "../../components/MissionVission/MissionVission";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-4"} />
      <Hero />
      <Features />
      <MissionVission />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
