import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import MissionVission from '../../components/MissionVission/MissionVission';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'}/>
            <Hero/>
            <Features/>
            <CampaignSection/>
            <MissionVission/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;