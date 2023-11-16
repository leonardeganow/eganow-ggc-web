import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Testimonial from '../../components/Testimonial/Testimonial';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TestimonialPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'} />
            <Testimonial tmClass={'pt-100'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TestimonialPage;

