'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;

var HomeSectionsPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="homeServices">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={4} className="hidden-xs">
                            <ul id="homeServiceList">
                                <li>
                                    <Link to="audiodistribution" title="Audio Distribution" id="homeServicesList-audio">
                                        <div className="textHolder">
                                            <p><span>Audio Distribution</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="videodistribution" title="Video Distribution" id="homeServicesList-video">
                                        <div className="textHolder">
                                            <p><span>Video Distribution</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="hometheater" title="Media Room & Theater" id="homeServicesList-media">
                                        <div className="textHolder">
                                            <p><span>Media Room & Theater</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="communicationsystems" title="Communication System" id="homeServicesList-communication">
                                        <div className="textHolder">
                                             <p><span>Communication System</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="securitysystems" title="Security System (Cameras / Alarm)" id="homeServicesList-security">
                                        <div className="textHolder">
                                            <p><span>Security System (Cameras / Alarm)</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="lightingcontrol" title="Lighting Control" id="homeServicesList-lighting">
                                        <div className="textHolder">
                                            <p><span>Lighting Control</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="othersystemsintegration" title="Integration - Others" id="homeServicesList-integration">
                                        <div className="textHolder">
                                            <p><span>Integration - Others</span></p>
                                        </div>
                                        <div className="iconHolder">
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={8} className="right_pane">
                            <h2>Our  Services</h2>
                            <hr />
                            <p>Knowing this is your vacation home, we have developed a philosophy of Client Services and Technology Simplicity to easily operate systems with carefully selected and reliable imported products to offer the best performance.</p>
                            <b>Our customers perpetual satisfaction is our inspiration!</b>
                            <Link to="whatwedo" title="This is what we do" className="button">This is what we do</Link>
                        </Col>

                        <Col xs={12} sm={8} id="closingPhrase" className="hidden-xs">
                            <div>
                                <p>The only home technology integration company you would ever need</p>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeSectionsPanel;
