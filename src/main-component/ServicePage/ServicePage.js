import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Features from '../../components/Features/Features';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ServicePage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <Features fClass={'pb-120'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;

