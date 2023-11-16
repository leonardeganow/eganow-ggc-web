import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const FunFact = (props) => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer"><CountUp end={25} enableScrollSpy /></span>K</h3>
                                    <p>AREA COVERAGE</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer"><CountUp end={32} enableScrollSpy /></span>K</h3>
                                    <p>CAMPAIGN DONE</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer"><CountUp end={25} enableScrollSpy /></span>%</h3>
                                    <p>PROJECT DONE</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="8"><CountUp end={8} enableScrollSpy /></span>th</h3>
                                    <p>ACTIVE VOLUNTEER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;