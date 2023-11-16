import React from 'react'
import abImg from '../../images/about-s2.jpg'
import icon1 from '../../images/about-icon-1.png'
import icon2 from '../../images/about-icon-2.png'

const About = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>We Can Make Our
                                    New Histry Together!</h2>
                            </div>
                            <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras.
                                Tristique semper adipiscing massa placerat dictumst amet, libero vitae.
                                Eget purus blandit velit sit mauris nibh porta.
                                Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo, </p>

                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="about-content">
                                        <div className="images">
                                            <img src={icon1} alt=""/>
                                        </div>
                                        <div className="text">
                                            <h3>OUR CAMPAIGN</h3>
                                            <p>Standard dummy of the text ever  the scrambled it to make.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="about-content">
                                        <div className="images">
                                            <img src={icon2} alt=""/>
                                        </div>
                                        <div className="text">
                                            <h3>BECOME A VOLUNTEER</h3>
                                            <p>Standard dummy of the text ever  the scrambled it to make.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;