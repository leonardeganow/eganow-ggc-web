import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-8 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call-1"></i>Call Us: 548978478</li>
                                <li><i className="fi flaticon-email-1"></i>demo@example.com</li>
                                <li><i className="fi ti-location-pin"></i>45 Dreem street Austria</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-4 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/">Social Address :</Link></li>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;