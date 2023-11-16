import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fImg1 from "../../images/election-donation/1.svg";
import jm from "../../images/portfolio/donate2.svg";
import fImg2 from "../../images/election-donation/2.svg";
import fImg3 from "../../images/election-donation/3.svg";
import { Link } from "react-scroll";

const settings = {
  dots: false,
  arrows: false,
  speed: 1000,
  centerMode: true,
  centerPadding: 0,
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
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Features = (props) => {
  return (
    <section
      className={`wpo-election-donation-section-s2 section-padding ${props.fClass}`}
    >
      <div className="container py-md-4 py-2">
        <div className="row p-6 g-lg-5 g-md-3">
          <div className="col-md-4">
            <div className="wpo-service-item shadow rounded-3">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={jm} alt="imag1" />
                </div>
                <h2 className="text-center text-danger m-0">DONATE TO JM</h2>
                <p className="p-2 m-0 text-center">
                  Lorem Ipsum is simply dummy text the industrey's standard
                  dummy text ever scrambled type specimen
                </p>
                <div className="text-center p-2 m-0">
                  <button type="button" className="btn btn-success">
                    Click To Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wpo-service-item shadow rounded-3">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={jm} alt="imag1" />
                </div>
                <h2 className="text-center text-danger m-0">GET A GGC CARD</h2>
                <p className="p-2 m-0 text-center">
                  Lorem Ipsum is simply dummy text the industrey's standard
                  dummy text ever scrambled type specimen
                </p>
                <div className="text-center p-2 m-0">
                  <Link to="getggc" smooth={true} duration={500}>
                    <button type="button" className="btn btn-success">
                      Click To Get Card
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wpo-service-item shadow rounded-3">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={jm} alt="imag1" />
                </div>
                <h2 className="text-center text-danger m-0">FOLLOW CAMPAIGN</h2>
                <p className="p-2 m-0 text-center">
                  Lorem Ipsum is simply dummy text the industrey's standard
                  dummy text ever scrambled type specimen
                </p>
                <div className="text-center p-2 m-0">
                  <button type="button" className="btn btn-success">
                    Click To Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg1} alt="" />
                                    </div>
                                    <h2>DONATE TO JM</h2>
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
                                    <h2>GET GGC CARD</h2>
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
                </div> */}
      </div>
    </section>
  );
};

export default Features;
