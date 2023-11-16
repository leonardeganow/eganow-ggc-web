import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/about/about';
import CampaignCountdown from '../../components/CampaignCountdown/CampaignCountdown';
import PortfolioSection from '../../components/PortfolioSection';
import EventSection from '../../components/EventSection/EventSection';
import FunFact from '../../components/FunFact/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';


const HomePage3 =() => {
    return(
        <Fragment>
            <Navbar2 hclass={'wpo-header-style-2'}/>
            <Hero3/>
            <About/>
            <EventSection/>
            <CampaignCountdown/>
            <PortfolioSection/>
            <FunFact/>
            <TeamSection/>
            <CtaSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;