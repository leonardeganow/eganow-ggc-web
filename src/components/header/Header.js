import React from "react";
import { Link as MyLink, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo-s3.png";
import { Link } from "react-scroll";
import TransactionsModal from "../modals/TransactionsModal";
import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [showLogin, setShowLogin] = useState(true); //state to show or hide the login page
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
    // window.location.reload(true);
    setShowLogin(true);
  };
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header
      style={{
        backgroundColor:
          location.pathname === "/about"
            ? "#900000"
            : location.pathname === "/terms"
            ? "#212529"
            : "",
      }}
      id="header"
      className={`${props.hclass} }`}
    >
      {/* <HeaderTopbar /> */}
      <div className="wpo-site-header  ">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row  align-items-center py-3 py-md-0">
              <div className="col-lg-3 col-md-3 col-sm-6  col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2  col-md-5 col-sm-4 col-6 ">
                <div className="navbar-header d-none d-md-block">
                  <MyLink
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/"
                  >
                    <img src={Logo} alt="logo" />
                  </MyLink>
                </div>
              </div>
              <div className="col-lg-6  col-md-1 col-sm-6 col-1">
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
                    <li>
                      <Link
                        to="getggc"
                        smooth={true}
                        duration={500}
                        onClick={ClickHandler}
                      >
                        Donate
                      </Link>
                    </li>
                    <li>
                      <MyLink to="/about">About</MyLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4  col-md-3 col-sm-4 col-2">
                <div className="header-right ">
                  <div className="close-form">
                    <MyLink to="/agentlogin" className="theme-btn">
                      <span className="text">AGENT LOGIN</span>
                      <span className="mobile">
                        <RiAdminFill size={28} />
                      </span>
                    </MyLink>
                  </div>

                  <div className="close-form ms-3">
                    <Link
                      onClick={handleOpen}
                      className="theme-btn theme-btn"
                      to="/"
                    >
                      <span className="text">DONOR LOGIN</span>
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
      <TransactionsModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        loginState={showLogin}
        setLoginState={setShowLogin}
      />
    </header>
  );
};

export default Header;
