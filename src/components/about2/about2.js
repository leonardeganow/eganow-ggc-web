import React from 'react'
import abimg from '../../images/about.jpg'
import { Link } from 'react-router-dom'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>About Politician</h4>
                            <h2>We raise voice for people <b>rights <span>&</span> provide rights.</b>
                            </h2>
                            <p>Aliquam erat volutpat. Duis ac turpis.
                                Integer rutrum ante eu lacus.Vestibulum libero nisl,
                                porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.
                                Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue.</p>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;