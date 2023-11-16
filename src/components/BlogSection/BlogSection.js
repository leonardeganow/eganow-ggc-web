import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-md-6 col-12">
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
                                    <g opacity="0.44" filter="url(#filter0_f_1_1050)">
                                        <circle cx="343.5" cy="129.5" r="129.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_1_1050" x="0" y="-214" width="687" height="687"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_105" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <span>Blog Post</span>
                            <h2>Awesome Blog Post & Article.</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="image">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="dete">
                                        <span>{blog.day}</span>
                                        <strong>{blog.month}</strong>
                                    </div>
                                    <div className="blog-content">
                                        <h2>{blog.title}</h2>
                                        <p>{blog.description}</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="theme-btn-s2">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;