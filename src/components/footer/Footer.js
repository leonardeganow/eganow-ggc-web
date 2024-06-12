import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../../images/logo-s2.svg'
import Logo from "../../images/logo-s3.png";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
// const SubmitHandler = (e) => {
//   e.preventDefault();
// };

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div className="shape-1">
        <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
          <rect width="795" height="12" fill="url(#paint0_linear_1_223)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_223"
              x1="795"
              y1="5.99883"
              x2="9.55538e-10"
              y2="5.99883"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="red" />
              <stop offset="1" stopColor="green" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-2">
        <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
          <rect width="795" height="12" fill="url(#paint0_linear_1_224)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_224"
              x1="2.31964e-06"
              y1="5.99883"
              x2="795"
              y2="5.99898"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="black" />
              <stop offset="1" stopColor="green" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={Logo} alt="blog" />
                </div>
                <p>We led with integrity. We’ll do even better again.</p>
                <ul>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      to="https://www.facebook.com/ndcgreenarmy"
                    >
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      to="https://twitter.com/ndcgreenarmy"
                    >
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      to="https://www.instagram.com/ndcgreenarmy/"
                    >
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>quick links:</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Get ggc card
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/terms">
                      Terms and conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi ti-location-pin"></i>641/4 Ringway Close,
                      Kokomlemle,
                      <br /> P. O. Box 5825, Accra- North
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call-1"></i>+233 (30)
                      2223195
                      {/* <br />+ 8 (123) 123 456 789 */}
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      info@ndcgh.org
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>newsletter:</h3>
                                </div>
                                <p>Lorem Ipsum has been the industry standard text ever since the printer took.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Enter your email"
                                            required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fa fa-paper-plane"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            {/* <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2023 Electian by <Link onClick={ClickHandler} to="/home">wpOceans</Link>.All Rights Reserved.</p>
                        </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
