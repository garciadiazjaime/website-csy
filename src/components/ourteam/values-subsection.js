'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;


var ValuesSubsection = React.createClass({

    render: function() {

        return (
        	<div id="features">
            <div className="container" id="ourpledge">
                <Row>
                    <Col xs={12} sm={4}>
                        <span className="icon quality_icon"></span>
                        <div className="arrow-down"></div>
                        <h2>High quality service standards</h2>
                        <p>Cabo Systems  main goal is to provide quality service and to maintain a long term relationship with our customers by supporting their system for years!</p>
                        <p>We will continue investing in our infrastructure to have our team always available for immediate service, as we have been since 1995 for all our customers.</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <span className="icon commitment_icon"></span>
                        <div className="arrow-down"></div>
                        <h2>Commitment</h2>
                        <p>We will strive to prove on every project that our service, attention to detail, and commitment to your satisfaction is among the best in the industry.</p>
                        <p>We continuously monitor the latest technologies, making sure that our offered solutions are the best option for the homeowner.</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <span className="icon team_icon"></span>
                        <div className="arrow-down"></div>
                        <h2>Always one step ahead</h2>
                        <p>Our major rule will always be to make our implementations very easy for everyone involved on a project (Architect, Constructor, Interior Designer and all other Contractors).</p>
                        <p>All of our In‐house Engineers, Technicians and Programmers will be periodically attending trainings to our different manufacturers facilities in USA.</p>
                    </Col>
                </Row>
                <Row className="margin_topped">
                    <Col xs={2} xsOffset={1} className="hidden-xs">
                        <span className="open_icon icon"></span>
                        <div className="arrow-right"></div>
                    </Col>
                    <Col xs={12} sm={5} md={6} className="hidden-xs">
                         <p className="openp">24/7 Service, You call us. We&#39;ll be there!</p>
                    </Col>
                    <Col xs={12} sm={3} md={2} className="hidden-xs">
                        <Link to="letsmeet" title="contact us" className="button">contact us</Link>
                    </Col>
                </Row>
            </div>
        </div>

        );
    }
});

module.exports = ValuesSubsection;
