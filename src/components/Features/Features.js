import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fImg1 from '../../images/election-donation/1.svg'
import fImg2 from '../../images/election-donation/2.svg'
import fImg3 from '../../images/election-donation/3.svg'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    centerMode: true,
    centerPadding:0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features = (props) => {
    return (
        <section className={`wpo-election-donation-section-s2 section-padding ${props.fClass}`}>
            <div className="container">
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg1} alt="" />
                                    </div>
                                    <h2>OUR CAMPAIGN</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/campaign">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>BECOME A VOLUNTEER</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/volunteer">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg3} alt="" />
                                    </div>
                                    <h2>MAKE DONATION</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/donate">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>BECOME A VOLUNTEER</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/volunteer">Details</Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Features;