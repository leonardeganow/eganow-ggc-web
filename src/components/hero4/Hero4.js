import React from "react";
import hero from '../../images/slider/1.png'


const Hero4 = () => {
    return (
        <section className="wpo-static-hero">
            <div className="static-hero hero-s2">
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="hero-content">
                                <div className="slide-title">
                                    <h2>PEACE IS
                                        IMPORTANT,
                                        NOT WAR.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the scrambled
                                        it
                                        to make.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="btns">
                                    <a href="contact.html" className="theme-btn-s3">JOIN THE CAMPAIGN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consult-pic">
                    <img src={hero} alt=""/>
                </div>
                <div className="hero-line-shape-1">
                    <svg width="520" height="478" viewBox="0 0 520 478" fill="none">
                        <circle opacity="0.05" cx="194.5" cy="152.5" r="325.5" />
                    </svg>
                </div>
                <div className="hero-line-shape-2">
                    <svg width="997" height="581" viewBox="0 0 997 581" fill="none">
                        <circle opacity="0.05" cx="508" cy="508" r="508" />
                    </svg>
                </div>
            </div>
            <div className="hero-line-shape-3">
                <svg width="779" height="779" viewBox="0 0 779 779" fill="none">
                    <path d="M0 0H779V779L0 0Z" />
                </svg>
            </div>
        </section>
    )
}

export default Hero4;