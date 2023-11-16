import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero4 from '../../components/hero4/Hero4';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import MissionVission from '../../components/MissionVission/MissionVission';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <Hero4 />
            <Features />
            <About />
            <CampaignSection />
            <MissionVission />
            <CtaSection ctaClass={'wpo-cta-section-s2 pb-0'} />
            <TeamSection />
            <FunFact />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;