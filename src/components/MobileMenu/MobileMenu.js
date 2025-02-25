import React, {  useState } from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/List";
// import Collapse from "@mui/material/Collapse";
// import { NavLink } from "react-router-dom";
import "./style.css";
import { Link } from "react-scroll";
import { Link as MyLink, useLocation } from "react-router-dom";

// const menus = [
//   {
//     id: 1,
//     title: "Home",
//     link: "/home",
//   },

//   {
//     id: 2,
//     title: "Get GGC",
//     link: ".getggc",
//   },

//   {
//     id: 3,
//     title: "Agent",
//     link: "/agentlogin",
//   },

//   //   {
//   //     id: 6,
//   //     title: "Event",
//   //     link: "/events",
//   //     submenu: [
//   //       {
//   //         id: 61,
//   //         title: "Event",
//   //         link: "/events",
//   //       },
//   //       {
//   //         id: 62,
//   //         title: "Event single",
//   //         link: "/event-single/Support-for-Womans",
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Pages",
//   //     link: "/",
//   //     submenu: [
//   //       {
//   //         id: 31,
//   //         title: "Gallery",
//   //         link: "/gallery",
//   //       },
//   //       {
//   //         id: 321,
//   //         title: "Volunteer",
//   //         link: "/volunteer",
//   //       },
//   //       {
//   //         id: 322,
//   //         title: "Testimonial",
//   //         link: "/testimonial",
//   //       },
//   //       {
//   //         id: 385,
//   //         title: "Team",
//   //         link: "/team",
//   //       },
//   //       {
//   //         id: 386,
//   //         title: "Team Single",
//   //         link: "/team-single/Harry-Abraham",
//   //       },
//   //       {
//   //         id: 388,
//   //         title: "Services",
//   //         link: "/service",
//   //       },
//   //       {
//   //         id: 389,
//   //         title: "Services Style 2",
//   //         link: "/service-s2",
//   //       },
//   //       {
//   //         id: 371,
//   //         title: "Shop",
//   //         link: "/shop",
//   //       },
//   //       {
//   //         id: 375,
//   //         title: "Shop Single",
//   //         link: "/product-single/Newspaper",
//   //       },
//   //       {
//   //         id: 376,
//   //         title: "Cart",
//   //         link: "/cart",
//   //       },
//   //       {
//   //         id: 377,
//   //         title: "Checkout",
//   //         link: "/checkout",
//   //       },
//   //       {
//   //         id: 33,
//   //         title: "FAQ",
//   //         link: "/faq",
//   //       },
//   //       {
//   //         id: 34,
//   //         title: "404 Error",
//   //         link: "/404",
//   //       },
//   //       {
//   //         id: 35,
//   //         title: "Login",
//   //         link: "/login",
//   //       },
//   //       {
//   //         id: 36,
//   //         title: "Register",
//   //         link: "/register",
//   //       },
//   //     ],
//   //   },

//   //   {
//   //     id: 5,
//   //     title: "Blog",
//   //     link: "/blog",
//   //     submenu: [
//   //       {
//   //         id: 51,
//   //         title: "Blog",
//   //         link: "/blog",
//   //       },
//   //       {
//   //         id: 52,
//   //         title: "Blog Left sidebar",
//   //         link: "/blog-left",
//   //       },
//   //       {
//   //         id: 53,
//   //         title: "Blog full width",
//   //         link: "/blog-fullwidth",
//   //       },
//   //       {
//   //         id: 54,
//   //         title: "Blog single",
//   //         link: "/blog-single/Letraset-Sheets-Passage-And-Recently",
//   //       },
//   //       {
//   //         id: 55,
//   //         title: "Blog single Left sidebar",
//   //         link: "/blog-single-left-sidebar/Letraset-Sheets-Passage-And-Recently",
//   //       },
//   //       {
//   //         id: 56,
//   //         title: "Blog single Left sidebar",
//   //         link: "/blog-single-fullwidth/Letraset-Sheets-Passage-And-Recently",
//   //       },
//   //     ],
//   //   },
//   {
//     id: 88,
//     title: "Donate",
//     link: "/donate",
//   },
// ];

const MobileMenu = () => {
  // const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  const location = useLocation();

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {/* {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? "active" : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <p
                      onClick={() =>
                        setOpenId(item.id === openId ? 0 : item.id)
                      }
                    >
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <NavLink
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink className="active" to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })} */}

          {location.pathname === "/about" ? (
            <MyLink
              to="/"
              smooth={true}
              duration={500}
              onClick={() => setMenuState(!menuActive)}
            >
              <li className="active text-white  text-center">Home</li>
            </MyLink>
          ) : (
            <Link to="" onClick={() => setMenuState(!menuActive)}>
              <li className="active text-white  text-center">Home</li>
            </Link>
          )}

          <Link
            to="getggc"
            smooth={true}
            duration={500}
            onClick={() => setMenuState(!menuActive)}
          >
            <li className="active text-white  text-center my-3">Get GGC</li>
          </Link>
          <Link
            to="getggc"
            smooth={true}
            duration={500}
            onClick={() => setMenuState(!menuActive)}
          >
            <li className="active text-white  text-center my-3">Donate</li>
          </Link>

          <MyLink
            to="/about"
            smooth={true}
            duration={500}
            onClick={() => setMenuState(!menuActive)}
          >
            <li className="active text-white  text-center my-3 ">About</li>
          </MyLink>
          <MyLink
            to="/agentlogin"
            smooth={true}
            duration={500}
            onClick={() => setMenuState(!menuActive)}
          >
            <li className="active text-white  text-center my-3 ">
              <span className="bg-success p-1 rounded shadow">Agent login</span>
            </li>
          </MyLink>

          {/* <Link
            to="donate"
            smooth={true}
            duration={500}
            onClick={() => setMenuState(!menuActive)}
          >
            <li className="active text-white  text-center">Donate</li>
          </Link> */}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
