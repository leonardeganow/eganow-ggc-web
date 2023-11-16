import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';


const TeamPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Team'} pagesub={'Team'}/> 
            <TeamSection tClass={'wpo-team-section-s3'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TeamPage;
