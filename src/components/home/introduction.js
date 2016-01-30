'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var HomeIntroductionPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="introduction">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6} md={8} className="white">
                            <Row>
                                <Col sm={3} className="hidden-xs">
                                    <span className="introduction-icon"></span>
                                </Col>
                                <Col xs={12} sm={9}>
                                     <h2>We make home technology enjoyable</h2>
                                </Col>
                            </Row>
                            <hr />
                            <p>Whether you are building, remodeling or you simply want to add the enjoyment and convenience of Home Entertainment & Automation, we appreciate the opportunity to offer you the service of Design, Installation and Maintenance of complete Home Electronic Systems for your residence in Los Cabos.</p>
                            <Link to="ourteam" title="Get to know us" className="button">Get to know us</Link>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p className="bigPhrase hidden-xs">Take control of your enviroment & entertainment</p>
                        </Col>
                        <Col xs={12} sm={6} md={8}>
                            <span className="wemake"></span>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <span className="takecontrol hidden-xs"></span>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeIntroductionPanel;
