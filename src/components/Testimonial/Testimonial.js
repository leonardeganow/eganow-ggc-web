import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/1.jpg'
import ts2 from '../../images/testimonial/2.jpg'
import ts3 from '../../images/testimonial/3.jpg'
import ts4 from '../../images/testimonial/4.jpg'
import ts5 from '../../images/testimonial/5.jpg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.",
        Title: 'Robert Willum',
        Sub: "President of BPT",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.",
        Title: 'Leslie Alexander',
        Sub: "President of TBP",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.",
        Title: 'David Joy',
        Sub: "President of AML",
    },
    {
        id: '04',
        tImg: ts4,
        Des: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.",
        Title: 'Robert Willum',
        Sub: "President of BPT",
    },
    {
        id: '05',
        tImg: ts5,
        Des: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in more recently with desktop publishing software like Aldus PageMaker including versions of lorem ipsum.",
        Title: 'David Joy',
        Sub: "President of AML",
    }
]

const Testimonial = (props) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section wpo-testimonial-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="wpo-section-title">
                            <div className="section-titl-shape-1">
                                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                    <g opacity="0.44" filter="url(#filter0_f_1_104)">
                                        <circle cx="343.5" cy="129.5" r="129.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_1_104" x="0" y="-214" width="687" height="687"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_104" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className="section-titl-shape-2">
                                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                    <g opacity="0.44" filter="url(#filter0_f_1_105)">
                                        <circle cx="343.5" cy="129.5" r="129.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_1_105" x="0" y="-214" width="687" height="687"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_105" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <span>TESTIMONIAL</span>
                            <h2>What People Say About Us.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-xl-12">
                            <div className="testimonial-image">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={5}
                                    slidesToScroll={1}
                                    fade={true}
                                    dots={false}
                                    arrows={false}
                                    centerMode={true}
                                    centerPadding={0}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <img src={tesmnl.tImg} alt="" />
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 slider-nav">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={true}>
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="text" key={tsm}>
                                                <p>“{tesmnl.Des}”</p>
                                                <h2>{tesmnl.Title}</h2>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))
                                    }
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;