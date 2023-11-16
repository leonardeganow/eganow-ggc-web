import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero2 from '../../components/hero2/Hero2';
import Features2 from '../../components/Features2/Features2';
import About2 from '../../components/about2/about2';
import CampaignCountdown from '../../components/CampaignCountdown/CampaignCountdown';
import MissionVission from '../../components/MissionVission/MissionVission';
import EventSection from '../../components/EventSection/EventSection';
import FunFact from '../../components/FunFact/FunFact';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero2/>
            <About2/>
            <Features2/>
            <EventSection/>
            <CampaignCountdown/>
            <MissionVission/>
            <FunFact/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;