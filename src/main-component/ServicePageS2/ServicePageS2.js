import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Features2 from '../../components/Features2/Features2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ServicePageS2 = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <Features2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePageS2;

