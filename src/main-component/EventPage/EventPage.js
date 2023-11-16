import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import EventSection from '../../components/EventSection/EventSection';

const EventPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Events'} pagesub={'Events'} />
            <EventSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default EventPage;
