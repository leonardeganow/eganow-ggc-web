import React from "react";
import { Link as MyLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo-s3.png";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";
import { Link } from "react-scroll";
import TransactionsModal from "../modals/TransactionsModal";
import { useState } from "react";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={`${props.hclass}`}>
      {/* <HeaderTopbar /> */}
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-3  col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-4 col-6">
                <div className="navbar-header">
                  <MyLink
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/"
                  >
                    <img src={Logo} alt="logo" />
                  </MyLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-sm-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <MyLink onClick={ClickHandler} to="/">
                        Home
                      </MyLink>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/">
                            Home style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-2">
                            Home style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-3">
                            Home style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-4">
                            Home style 4
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link
                        to="getggc"
                        smooth={true}
                        duration={500}
                        onClick={ClickHandler}
                      >
                        Get GOOD GOVERNANCE CARD
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        to="donate"
                        smooth={true}
                        duration={500}
                        onClick={ClickHandler}
                      >
                        Donate
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/events">
                            EVENTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/event-single/Support-for-Womans"
                          >
                            EVENTS single
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Pages
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/gallery">
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/volunteer">
                            Volunteer
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/testimonial">
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/team">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/team-single/Harry-Abraham"
                          >
                            Team Single
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Services
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/service">
                                Services Style 1
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/service-s2">
                                Services Style 2
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/product-single/Newspaper"
                          >
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/faq">
                            FAQ
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Auth Pages
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/login">
                                Login Page
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/register">
                                Register Page
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/forgot-password"
                              >
                                Forgot Password
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">
                            404 Error
                          </Link>
                        </li>
                      </ul> */}
                    {/* </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Blog
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single/Letraset-Sheets-Passage-And-Recently"
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-left-sidebar/Letraset-Sheets-Passage-And-Recently"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-fullwidth/Letraset-Sheets-Passage-And-Recently"
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-2">
                <div className="header-right">
                  <div className="close-form">
                    <Link onClick={handleOpen} className="theme-btn" to="/">
                      <span className="text">LOGIN</span>
                      <span className="mobile">
                        <i className="fi flaticon-user"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <TransactionsModal open={open} handleClose={handleClose} handleOpen={handleOpen}/>
    </header>
  );
};

export default Header;
