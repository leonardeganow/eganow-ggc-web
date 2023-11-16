import React from "react";
import { Link } from 'react-router-dom'
import Events from '../../api/events'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const EventSection = (props) => {
    return (
        <section className="wpo-event-section">
    <div className="container-fluid">
        <div className="event-wrap">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-12">
                    <div className="wpo-section-title">
                        <span>Our Event’s</span>
                        <h2>You can attend our upcoming events</h2>
                    </div>
                </div>
                {
                   Events.map(( event, evt) => (
                        <div className="col-lg-3 col-md-6 col-12" key={evt}>
                            <div className="event-item">
                                <div className="image">
                                    <img src={event.eImg} alt=""/>
                                </div>
                                <div className="event-content">
                                    <span><i className="fa fa-map-marker" aria-hidden="true"></i>{event.location}</span>
                                    <h2><Link onClick={ClickHandler} to={`/event-single/${event.slug}`}>{event.title}</Link></h2>
                                    <div className="event-date">
                                        <span className="date"><i className="fa fa-calendar"
                                                aria-hidden="true"></i>{event.date}</span>
                                        <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   ))
                }
            </div>
        </div>
    </div>
    <div className="shape-1">
        <svg width="960" height="70" viewBox="0 0 960 70" fill="none">
            <rect width="960" height="70" transform="matrix(-1 0 0 1 960 0)" fill="url(#paint0_linear_1_168)" />
            <defs>
                <linearGradient id="paint0_linear_1_168" x1="2.66246e-06" y1="35.3845" x2="960" y2="35.3845"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#DE2045" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-2">
        <svg width="960" height="70" viewBox="0 0 960 70" fill="none">
            <rect width="960" height="70" transform="matrix(-1 0 0 1 960 0)" fill="url(#paint0_linear_1_167)" />
            <defs>
                <linearGradient id="paint0_linear_1_167" x1="2.66246e-06" y1="35.3845" x2="960" y2="35.3845"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#274DCF" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-3">
        <svg width="354" height="354" viewBox="0 0 354 354" fill="none">
            <circle cx="177" cy="177" r="177" fill="url(#paint0_linear_1_165)" />
            <defs>
                <linearGradient id="paint0_linear_1_165" x1="177" y1="0" x2="177" y2="354"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-4">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle r="150" transform="matrix(-4.37114e-08 1 1 4.37114e-08 150 150)"
                fill="url(#paint0_linear_1_166)" />
            <defs>
                <linearGradient id="paint0_linear_1_166" x1="150" y1="0" x2="150" y2="300"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</section>
    );
}

export default EventSection;