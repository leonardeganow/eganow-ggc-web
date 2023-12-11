import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Features from '../../components/Features/Features';
// import About from '../../components/about/about';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <Features/>
            {/* <About/> */}
            <CampaignSection />
            <CtaSection ctaClass={'wpo-cta-section-s2 pb-0'}/>
            <TeamSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
