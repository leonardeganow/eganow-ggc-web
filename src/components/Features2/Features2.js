import React from "react";
import { Link } from 'react-router-dom'
import fImg1 from '../../images/election-donation/1.svg'
import fImg2 from '../../images/election-donation/2.svg'
import fImg3 from '../../images/election-donation/3.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features2 = (props) => {
    return (
        <section className="wpo-election-donation-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="election-donation-item">
                            <div className="logo">
                                <img src={fImg1} alt=""/>
                            </div>
                            <div className="text">
                                <h2>OUR CAMPAIGN</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy of the text ever since the
                                    scrambled it to make.</p>
                                <div className="icon">
                                    <Link onClick={ClickHandler} to="/campaign">
                                        <i className="ti-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="election-donation-item color-2">
                            <div className="logo">
                                <img src={fImg2} alt=""/>
                            </div>
                            <div className="text">
                                <h2>BECOME A VOLUNTEER</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy of the text ever since the
                                    scrambled it to make.</p>
                                <div className="icon">
                                    <Link onClick={ClickHandler} to="/volunteer">
                                        <i className="ti-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="election-donation-item color-3">
                            <div className="logo">
                                <img src={fImg3} alt=""/>
                            </div>
                            <div className="text">
                                <h2>MAKE DONATION</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy of the text ever since the
                                    scrambled it to make.</p>
                                <div className="icon">
                                    <Link onClick={ClickHandler} to="/donate">
                                        <i className="ti-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features2;